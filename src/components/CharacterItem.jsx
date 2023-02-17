import { getDataLength } from "../utils/util";

const CharacterItem = ({ character }) => {
  const { name, aliases, titles, books, tvSeries } = character;

  return (
    <div className="character_box">
      <div className="character">
        <div>
          <span className="title">name : </span><span className="content">{name}</span>
          <span className="title">aliases : </span><span className="content">{aliases?.length && aliases.join(", ")}</span>
        </div>
        <div>
          <span className="title">title : </span><span className="content">{titles?.length && titles.join(", ")}</span>
        </div>
        <div>
          <span className="title">books : </span><span className="content">{getDataLength(books)}</span>
          <span className="title">tv Sereies : </span><span className="content">{getDataLength(tvSeries)}</span>
        </div>
      </div>
      <div className="delete_btn">삭제</div>
    </div>
  )
}

export default CharacterItem;