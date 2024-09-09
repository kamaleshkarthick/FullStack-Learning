import React, { Component } from "react";
import getMovies from "./fakemovedata";

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
    };
    }
    
    handleOnDelete (M){

        // console.log(M);
        const Movies = this.state.movies.filter(Movie => Movie.id !== M.id)
        console.log(Movies);
        this.setState({
            movies: Movies
        })
        
    }

    render() {
        //destructure 
        const{length:count}=this.state.movies
        if (this.state.movies === 0) {
            return <p>No Data</p>;
      }
    return (
        <React.Fragment>
            {/* <h1> No of record - { this.state.movies.length}</h1> */}
            <h1> No of record - { count}</h1>
        <table className="table"/*  class="table table-dark table-striped" */ >
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Gener</th>
              <th scope="col">Rate</th>
              <th scope="col">BUTTON</th>
            </tr>
          </thead>
                <tbody>
                    {this.state.movies.map((M ,i) => (
                        <tr key={M.id}>
                            <td>{ M.title}</td>
                            <td>{ M.genre.gname}</td>
                            <td>{M.dailyRentalRate}</td>
                            <td>
                                <button onClick={()=>this.handleOnDelete(M)}
                                    type="button" className="btn btn-danger">DELETE</button>
                            </td>
                        </tr>
                        
                    ))}
                    
            
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
