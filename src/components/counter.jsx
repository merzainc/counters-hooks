import React from 'react';

function Counter({ value }) {
  console.log(value);
  return (
    <>
      <span className="badge bg-primary rounded px-2">{value}</span>
      <button className="btn btn-outline-primary btn-sm rounded-2 mx-3">
        Increment
      </button>
      <button className="btn btn-outline-secondary btn-sm rounded-2 mx-3">
        Decrement
      </button>
    </>
  );
}

export default Counter;
