import { useContext } from 'react';
import { CounterContext } from '../context/GlobalState';
import Counter from './counter';

function Counters(props) {
  const { counters } = useContext(CounterContext);
  return counters.map((counter) => (
    <Counter key={counter.id} value={counter.value} />
  ));
}

export default Counters;
