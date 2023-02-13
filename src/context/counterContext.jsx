import { createContext, useState } from 'react';
// initial counters state
const initialState = {
  counters: [{ id: 1, value: 4 }],
};

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [{ counters }, setCounter] = useState(initialState);

  const handleOperation = (id, operation) => {
    const counter = counters.find((c) => c.id === id);
    const index = counters.indexOf(counter);
    operation === 'increment' ? counter.value++ : counter.value--;
    counters[index] = { ...counter };
    setCounter({ counters });
  };

  const addCounter = () =>
    setCounter({
      counters: [{ id: counters.length + 1, value: 0 }, ...counters],
    });
  const removeCounter = (id) =>
    setCounter({ counters: counters.filter((c) => c.id !== id) });

  return (
    <CounterContext.Provider
      value={{
        counters,
        addCounter,
        removeCounter,
        handleOperation,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
