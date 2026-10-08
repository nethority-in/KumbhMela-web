import { useState, useRef, useEffect } from "react";

const API_URL = "https://api.mahakumbh.net/chat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Namaste! Ask me about Kumbh Mela 2027 - bathing days, crowd levels, travel tips.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    fetch("https://api.mahakumbh.net/track-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: "chat-widget",
        device: "web",
        lang: navigator.language?.slice(0, 2),
      }),
    }).catch(() => {});
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    const chatMessages = messages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      }));
    chatMessages.push({ role: "user", content: text });
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages }),
      });
      const data = await res.json();
      const reply = data.reply || data.error || "Something went wrong.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Chat server unavailable. Please try again later.",
        },
      ]);
    }
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 1000,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#e0954a",
          color: "#0d0c0b",
          border: "none",
          fontSize: "1.4rem",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,.4)",
        }}
        aria-label="Open chat"
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "5rem",
            right: "1.5rem",
            zIndex: 1000,
            width: "360px",
            maxWidth: "calc(100vw - 3rem)",
            height: "480px",
            background: "#1a1a1a",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,.5)",
            border: "1px solid #333",
          }}
        >
          <div
            style={{
              padding: "0.75rem 1rem",
              background: "#e0954a",
              color: "#0d0c0b",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            Kumbh Mela Chat
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "0.75rem" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "0.5rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "8px",
                  background: m.role === "user" ? "#333" : "#222",
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                  whiteSpace: "pre-wrap",
                }}
              >
                <strong
                  style={{ color: m.role === "user" ? "#e0954a" : "#7cbdaa" }}
                >
                  {m.role === "user" ? "You" : "Bot"}:
                </strong>{" "}
                {m.text}
              </div>
            ))}
            {loading && (
              <div
                style={{ color: "#666", fontSize: "0.8rem", padding: "0.5rem" }}
              >
                Thinking...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div
            style={{
              display: "flex",
              padding: "0.5rem",
              borderTop: "1px solid #333",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: "0.5rem 0.75rem",
                borderRadius: "8px",
                border: "1px solid #444",
                background: "#222",
                color: "#eee",
                fontSize: "0.85rem",
                outline: "none",
              }}
            />
            <button
              onClick={send}
              disabled={loading}
              style={{
                marginLeft: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                background: "#e0954a",
                color: "#0d0c0b",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
