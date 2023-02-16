import { useEffect, useState } from "react";
import CharacterItem from "./CharacterItem";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/characters?page=1&amp;pageSize=10")
      .then(response => response.json())
      .then(result => setCharacterList(result))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div>
      {characterList.map((character, idx) => (
        <CharacterItem key={idx} character={character} />
      ))}
    </div>
  )
}

export default CharacterList;