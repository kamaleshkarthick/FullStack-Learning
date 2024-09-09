import React, { Component } from "react";
import MovieTable from "./Table Component/MovieTable";
import 'axios';
import axios from "axios";

export default class MovieApi extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

    componentDidMount() {
   /*          // Fetch API
   
   fetch("http://localhost:3004/movies")
      .then((res) => res.json())
      // .then(res => console.log(res)
      // .then(res => console.log(res.json())
      .then(data => this.setState({ movies: data })); */

        // Axios API
        axios.get(`http://localhost:3004/movies`)
            .then(res => {

                const movies = res.data;
                this.setState({movies})
                
                // this.setState({movies : res.data})
        })
  }

  handleOnDelete=(M)=>{
    // console.log(M);
    const Movies = this.state.movies.filter((Movie) => Movie.id !== M.id);
    console.log(Movies);
    this.setState({
      movies: Movies,
    });
  }

  render() {
    //destructure
    const { length: count } = this.state.movies
    let value;
    if (this.state.movies.length === 0) {
      value="No Data"
      return <p>No Data</p>;
    }
    return (
        <React.Fragment>
            {/* <h1> No of record - { this.state.movies.length}</h1> */}
        <h1> No of record - {count}</h1>
        <h2>{value}</h2>

                {/* Passing value to child components */}
            <MovieTable movies={this.state.movies} clickMe={this.handleOnDelete} />
            
            
        
        <table className="table" /*  class="table table-dark table-striped" */>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Gener</th>
              <th scope="col">Rate</th>
              <th scope="col">BUTTON</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((M, i) => (
              <tr key={M.id}>
                <td>{M.title}</td>
                <td>{M.genre.gname}</td>
                <td>{M.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleOnDelete(M)}
                    type="button"
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
