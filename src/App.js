import './dist/css/App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <Filter />
        <Character />
      </div>
    </div>
  );
}

export default App;
