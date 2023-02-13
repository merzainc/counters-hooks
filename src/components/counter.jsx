function Counter({ value, onIncrement, onDecrement }) {
  return (
    <>
      <span
        className={`badge rounded px-2 mt-3 ${
          value > 0 ? 'bg-primary' : 'bg-warning'
        }`}
      >
        value: {value}
      </span>
      <button
        onClick={onIncrement}
        className="btn btn-outline-primary btn-sm rounded-2 mx-1"
      >
        Increment
      </button>
      <button
        onClick={onDecrement}
        disabled={value === 0 ? true : false}
        className="btn btn-secondary btn-sm rounded-2 mx-1"
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
