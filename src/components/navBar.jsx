import { useContext } from 'react';
import { CounterContext } from '../context/counterContext';

function NavBar(props) {
  const { counters } = useContext(CounterContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge bg-info px-2 rounded mx-2">
            Counters: {counters.length}
          </span>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
