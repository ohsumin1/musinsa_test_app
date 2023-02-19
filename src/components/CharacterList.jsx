import { useEffect, useRef, useState } from "react";
import CharacterItem from "./CharacterItem";
import { getDataLength } from "../utils/util" 

const CharacterList = ({ useFilterContext, clickedRefresh }) => {
  const pageParam = parseInt(new URLSearchParams(window.location.search).get('page'));
  const defaultPage = pageParam || 0;
  const loader = useRef(null);

  const [characterList, setCharacterList] = useState([]);
  const [params, setParams] = useState('');
  const [page, setPage] = useState(defaultPage || 0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [selectedFilters] = useFilterContext();

  useEffect(() => {
    fetchData(params);
  }, [page, params]);

  useEffect(() => {
    if (!isInitialLoad) {
      changeParams();
      setPage(defaultPage);
    }
  }, [selectedFilters])

  useEffect(() => { 
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    }, );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    }
  }, [loader.current]);

  const changeParams = () => {
    const queryFilters = Object.fromEntries(Object.entries(selectedFilters)
      .filter(([, value]) => value !== '')); 
    const newParams = new URLSearchParams(queryFilters);
    setParams(newParams);
  }

  const fetchData = (params) => {
    const PAGE_SIZE = 10;
    fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${PAGE_SIZE}&${params}`)
      .then(response => response.json())
      .then(result => page > defaultPage ? [...characterList, ...result] : result)
      .then(result => filterList(result))
      .then(result => setCharacterList(result))
      .then(isInitialLoad && setIsInitialLoad(false))
      .catch(error => console.log('error', error));
  }

  const filterList = (list) => {
    if (selectedFilters.hasOwnProperty('tvSeries')) {
      return list.filter((el) => getDataLength(el.tvSeries) === 0);
    }
    return list;
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
      {characterList.length > 0 && <div ref={loader} />}
    </div>
  )
}

export default CharacterList;