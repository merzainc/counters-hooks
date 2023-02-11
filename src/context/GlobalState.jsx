import { createContext, useReducer } from 'react';
import CounterReducer from './CounterReducer';
const countersState = {
  counters: [{ id: 1, value: 4 }],
};

export const CounterContext = createContext(countersState);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, countersState);
  return (
    <CounterContext.Provider value={{ counters: state.counters }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
