import './App.css';
import DefaultKnapp from './Knapper/DefaultKnapp';
import SimpleKnapp from './Knapper/SimpleKnapp';
import GhostKnapp from './Knapper/GhostKnapp';
import ActionKnapp from './Knapper/ActionKnapp';

function App() {
  return (
    <div className="App">
      <header className="blog-header">
        🎵Alle de som klikke kan, de hører hjemme i knappeland🎵
      </header>
      <DefaultKnapp/>
      <SimpleKnapp/>
      <GhostKnapp/>
      <ActionKnapp/>
      <h1>🎵Jeg har ikke kone, fire barn, men jeg jobbet et par dager på en knappefabrikk🎵</h1>
    </div>
  );
}

export default App;
