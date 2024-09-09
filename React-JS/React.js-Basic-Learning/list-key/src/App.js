// import logo from './logo.svg';

import './App.css';
import { Basic, Basic1 } from './List & Key/Basic';
import DataCollect from './List & Key/Conditional_list&key';
import Basic2 from './List & Key/OnlyObject';

// import  Basic from './List & Key/Basic';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <Basic />
        <Basic1/>
        <Basic2 />
        <DataCollect/>
        
      </header>
    </div>
  );
}

export default App;
