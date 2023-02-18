import './dist/css/App.css';
import Header from './components/Header';
import Main from './pages/Main';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
