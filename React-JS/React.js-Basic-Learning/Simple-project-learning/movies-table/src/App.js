
import './App.css';
import React from 'react';
// import Movie from './Movies-Table/Movie';
// import MovieApi from './Movies-Table/Movie_api';
import MovieHook from './Movies-Table/Movies-Hooks';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        
        {/* <Movie /> */}
        {/* <MovieApi /> */}
        <MovieHook/>
        
        </div>
      
      
      
    </React.Fragment>
  );
}

export default App;
