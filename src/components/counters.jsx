import { useContext, useState } from 'react';
import { CounterContext } from '../context/counterContext';
import Counter from './counter';

function Counters(props) {
  const { counters, addCounter, removeCounter, handleOperation } =
    useContext(CounterContext);

  return (
    <>
      <button
        onClick={() => addCounter()}
        className="btn btn-primary rounded-2 btn-sm mb-3"
      >
        New Counter
      </button>
      {!counters.length && (
        <p className="text-info">No counters components were found.</p>
      )}
      <div>
        {counters.map((counter) => (
          <>
            <Counter
              key={counter.id}
              onIncrement={() => handleOperation(counter.id, 'increment')}
              onDecrement={() => handleOperation(counter.id, 'decrement')}
              value={counter.value}
            ></Counter>
            <button
              onClick={() => removeCounter(counter.id)}
              className="btn btn-danger btn-sm rounded-2"
            >
              Remove
            </button>
            <br />
          </>
        ))}
      </div>
    </>
  );
}

export default Counters;
