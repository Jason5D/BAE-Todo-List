import Credits from './Credits.js';
import Input from './Input.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main>
        <Input />
      </main>
      <footer>
        <Credits />
      </footer>
    </div>
  );
}

export default App;
