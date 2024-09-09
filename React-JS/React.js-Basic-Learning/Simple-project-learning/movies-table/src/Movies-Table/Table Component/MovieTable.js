import React from "react";

function MovieTable (props)  {
     
    /* let handleOnClick = (M) => {
        // console.log("click")
     props.clickMe(M) } */

    return (
        <React.Fragment>
            
        <table className="table" /*  class="table table-dark table-striped" */>
          <thead>
            <tr>
              <th >Title</th>
              <th >Gener</th>
              <th >Rate</th>
              <th >BUTTON</th>
            </tr>
            </thead>
          <tbody>
            {props.movies.map((M, i) => (
              <tr key={M.id}>
                <td>{M.title}</td>
                <td>{M.genre.gname}</td>
                <td>{M.dailyRentalRate}</td>
                <td>
                        <button
                            /*  onClick={()=>handleOnClick(M)}
                             onClick={()=>handleOnClick(M)} */
                            onClick={ ()=>{props.clickMe(M)}}
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
export default MovieTable;