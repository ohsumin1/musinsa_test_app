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
  const [clickedRefresh, setClickedRefresh] = useState(false);

  return (
    <FilterContext.Provider value={selectedFilters}>
      <div id="filter_box">
        <Filter useFilterContext={useFilterContext} />
        <RefreshButton setClickedRefresh={setClickedRefresh} />
      </div>
      <CharacterList 
        useFilterContext={useFilterContext} 
        clickedRefresh={clickedRefresh} />
    </FilterContext.Provider>
  )
}

export default Main;