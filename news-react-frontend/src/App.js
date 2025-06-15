
import './App.css';
import ContentNews from './components/ContentNews/ContentNews';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notícias</h1>
      </header>
      <Filter />
      <ContentNews />
    </div>
  );
}

export default App;
