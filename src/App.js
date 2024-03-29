import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer className="footer">
        © Copyright {new Date().getFullYear()} Catter. Made by{' '}
        <a href="https://github.com/KeturahDev">Keturah Howard</a>.
      </footer>
    </div>
  );
}

export default App;


{/* Ideas */}
{/* pick a component library */}
{/* pick a free cat api */}
{/* create a component that randomly generates cat photos */}
{/* create a component that randomly generates cat facts */}