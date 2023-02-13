import Counters from './components/counters';
import NavBar from './components/navBar';
import CounterProvider from './context//counterContext';
function App() {
  return (
    <CounterProvider>
      <NavBar />
      <main className="container-fluid mt-3">
        <Counters />
      </main>
    </CounterProvider>
  );
}

export default App;
