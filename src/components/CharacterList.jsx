import { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";
import { getDataLength } from "../utils/util" 

const CharacterList = ({ useFilterContext, clickedRefresh }) => {
  const [characterList, setCharacterList] = useState([]);
  const [oldFilterStr, setOldFilterStr] = useState([]);
  const [selectedFilters] = useFilterContext();

  useEffect(() => {
    searchCharacter();
  }, [selectedFilters])

  const searchCharacter = () => {
    const queryFilters = Object.fromEntries(Object.entries(selectedFilters)
      .filter(([, value]) => value !== ''));
    const newFilterStr = Object.keys(queryFilters).join(",");

    /**
     * API 조회가 필요없는 필터를 선택한 경우 API 조회를 하지 않고 데이터를 필터링 해준다.
     * 해당 필터를 해제한 경우 API를 조회한다.
     */
    if (newFilterStr === oldFilterStr) {
      if (filterList()) {
        return;
      }
    } 
    const params = new URLSearchParams(queryFilters);
    fetchApi(params); 
    setOldFilterStr(newFilterStr);
  }

  const fetchApi = (params) => {
    const PAGE_SIZE = 10;
    fetch(`https://www.anapioficeandfire.com/api/characters?page=1&pageSize=${PAGE_SIZE}&${params}`)
      .then(response => response.json())
      .then(result => setCharacterList(result))
      .catch(error => console.log('error', error));
  }

  const filterList = () => {
    /**
     * 필터링을 할 경우 필터링 후 true를 반환, 필터링을 하지 않을 경우 false를 반환해서 API를 조회하도록 한다.
     */
    if (selectedFilters.hasOwnProperty('tvSeries')) {
      setCharacterList(characterList.filter((el) => getDataLength(el.tvSeries) === 0));
      return true;
    } 
    return false;
  }

  return (
    <div>
      {characterList.map((character, idx) => (
        <CharacterItem 
          key={idx} 
          character={character} 
          clickedRefresh={clickedRefresh}
        />
      ))}
    </div>
  )
}

export default CharacterList;