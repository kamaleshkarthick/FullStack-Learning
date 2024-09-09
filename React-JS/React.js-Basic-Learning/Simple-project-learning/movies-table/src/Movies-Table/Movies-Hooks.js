import React, { useState, useEffect } from "react";
import axios from "axios";
 

const MovieHook = () => {
    let [movie, setmovie] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3004/movies`)
            .then(restul => setmovie(restul.data))
    })
   let handleOnDelete=(M)=>{
       // console.log(M);
      
        const Movies = movie.filter((Movie) => Movie.id !== M.id);
        console.log(Movies);
       setmovie( Movies);
        console.log(movie);
      }
    return (
        <React.Fragment>
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
            {movie.map((M, i) => (
              <tr key={M.id}>
                <td>{M.title}</td>
                <td>{M.genre.gname}</td>
                <td>{M.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => handleOnDelete(M)}
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
export default MovieHook;