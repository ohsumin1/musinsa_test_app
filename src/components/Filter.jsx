import { FILTERS } from "../utils/constants";

const Filter = ({ useFilterContext }) => {
  const [selectedFilters, setSelectedFilters] = useFilterContext();

  const handleFilterClick = (e) => {
    const filterId = e.target.id;
    if (!selectedFilters.hasOwnProperty(filterId)) {
      setSelectedFilters(
        prevState => ({ 
          ...prevState, 
          ...{[filterId]: FILTERS[filterId].searchValue} 
        })
      );
    } else {
      setSelectedFilters(
        prevState => {
          const newState = {...prevState};
          delete newState[filterId];
          return newState;
        }
      );
    }
  }

  return (
    <div>
      {Object.keys(FILTERS).map((key, idx) => (
        <div
          key={idx}
          className={`filter_btn ${selectedFilters.hasOwnProperty(key) && 'on'}`}
          id={key}
          onClick={handleFilterClick}>
          {FILTERS[key].text}
        </div>
      ))}
    </div>
  )
}

export default Filter;