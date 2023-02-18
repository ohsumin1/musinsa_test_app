import { createContext, useContext, useState } from "react";
import Filter from "../components/Filter";
import RefreshButton from "../components/RefreshButton";
import CharacterList from "../components/CharacterList";

const FilterContext = createContext();

const useFilterContext = () => {
  const value = useContext(FilterContext);
  return value;
}

const Main = () => {
  const selectedFilters = useState({});

  return (
    <FilterContext.Provider value={selectedFilters}>
      <div id="filter_box">
        <Filter useFilterContext={useFilterContext} />
        <RefreshButton useFilterContext={useFilterContext}  />
      </div>
      <CharacterList useFilterContext={useFilterContext} />
    </FilterContext.Provider>
  )
}

export default Main;