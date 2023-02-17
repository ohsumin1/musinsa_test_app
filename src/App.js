import { createContext, useState, useContext } from 'react';
import './dist/css/App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';

const FilterContext = createContext();

const useFilterContext = () => {
  const value = useContext(FilterContext);
  return value;
}

const App = () => {
  const selectedFilters = useState({});

  return (
    <div className="App">
      <Header />
      <div id="container">
        <FilterContext.Provider value={selectedFilters}>
          <Filter useFilterContext={useFilterContext} />
          <CharacterList useFilterContext={useFilterContext} />
        </FilterContext.Provider>
      </div>
    </div>
  );
}

export default App;
