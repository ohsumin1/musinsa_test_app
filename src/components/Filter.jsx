import { useRef } from "react";
import { FILTERS } from "../utils/constants";

const Filter = ({ useFilterContext }) => {
  const [selectedFilters, setSelectedFilters] = useFilterContext();

  const handleClick = (e) => {
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
    <div className="filter_box">
      <div>
        {Object.keys(FILTERS).map((key, idx) => (
          <span key={idx} className={`filter_btn ${selectedFilters.hasOwnProperty(key) && 'on'}`} id={key} onClick={handleClick}>
            {FILTERS[key].text}
          </span>
        ))}
      </div>
      <div>
        <div id="refresh_box">
          <span>초기화</span><img id="refresh_btn" src="https://cdn-icons-png.flaticon.com/512/1549/1549456.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Filter;