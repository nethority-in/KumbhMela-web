import { createContext, useContext, useEffect, useState } from 'react';
import { loadCalendar } from './calendar.js';

const Ctx = createContext({ days: [], status: 'loading', error: null });

export function CalendarProvider({ children }) {
  const [state, setState] = useState({ days: [], status: 'loading', error: null });

  useEffect(() => {
    let alive = true;
    loadCalendar()
      .then((cal) => alive && setState({ days: cal.days, status: 'ready', error: null, meta: cal }))
      .catch((e) => alive && setState({ days: [], status: 'error', error: e }));
    return () => { alive = false; };
  }, []);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export function useCalendar() {
  return useContext(Ctx);
}
