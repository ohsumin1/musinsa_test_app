const Character = () => {
  return (
    <div className="character_box">
      <div className="character">
        <div>
          <span className="title">name : </span><span className="content">홍길동</span>
          <span className="title">aliases : </span><span className="content">소설주인공, 도둑, 열혈청년</span>
        </div>
        <div>
          <span className="title">title : </span><span className="content">신홍길동전, 도둑들</span>
        </div>
        <div>
          <span className="title">books : </span><span className="content">3</span>
          <span className="title">tv Sereies : </span><span className="content">1</span>
        </div>
      </div>
      <div className="delete_btn">삭제</div>
    </div>
  )
}

export default Character;