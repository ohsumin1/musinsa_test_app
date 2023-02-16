import './dist/css/App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <Filter />
        <CharacterList />
      </div>
    </div>
  );
}

export default App;
