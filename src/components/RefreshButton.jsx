const RefreshButton = ({ useFilterContext }) => {
  const [, setSelectedFilters] = useFilterContext();

  return (
    <div>
      <div id="refresh_box">
        <span>초기화</span>
        <img id="refresh_btn" src="https://cdn-icons-png.flaticon.com/512/1549/1549456.png"></img>
      </div>
    </div>
  )
}

export default RefreshButton;