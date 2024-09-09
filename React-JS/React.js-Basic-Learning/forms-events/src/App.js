import './App.css';
import Forms from './Forms & Events/Forms';
import Movement from './Forms & Events/MovementEvents';
import InputEvents from './Forms & Events/inputEvents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <InputEvents />
        <Movement />
        <Forms/>
        {/* <InputEvents /> */}
        
      </header>
    </div>
  );
}

export default App;
