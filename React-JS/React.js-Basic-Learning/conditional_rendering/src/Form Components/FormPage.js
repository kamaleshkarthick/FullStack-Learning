import React, {useState } from "react";
// import'./Formpage.css';

export default function FormPage() {
  const [name, setName] = useState("");
  const [headText,setheadText] = useState();

  let handleChange = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  function handleClick(event) {
    setheadText(name)
    event.preventDefault()
    
  }


  return (
    <>
      <form>
        <h1>Form Page</h1>
        <h2>Welcome {name}</h2>
        <h3>Thank for coming {headText}</h3>

        <input
          onChange={handleChange}
          type="text"
          placeholder="enter the name"
          value={name}
        />
        <button onClick={handleClick}>submit</button>
      </form>
    </>
  );
}





//-----------------------------------------------------------
/* export default class FormPage extends Component {

  handlechange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <h1>Form Page</h1>
          <input
            onChange={this.handlechange}
            type="text" placeholder="enter the name" />

        </form>
      </React.Fragment>
    );
  }
} */

/*  { <div id="fullBg">
<div className="container">
<form className="form-signin">
<h1 className="form-signin-heading">Please Login</h1>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Email Address"
                required=""
                autofocus=""
              />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required=""
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Log in
              </button>
            </form>
            <p className="text-center sign-up">
              <strong>Sign up</strong> for a new account
            </p>
          </div>
        </div> }*/
