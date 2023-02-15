const Filter = () => {
  return (
    <div className="filter_box">
      <div>
        <span className="filter_btn">생존인물만</span>
        <span className="filter_btn">여자</span>
        <span className="filter_btn">tvSeries 없음</span>
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