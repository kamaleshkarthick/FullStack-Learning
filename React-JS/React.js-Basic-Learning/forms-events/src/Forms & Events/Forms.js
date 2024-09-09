import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'kk',
      feedBack: '',
      acceptedTerms: false,
      submitted: 0,
      validatetionErrors : {}
    };

  }
    handleOnChange = (e) => {
        const target = e.target
            //  console.log(target.name);
        const name = target.name
      // console.log(name);
      const values = target.type === "text"? target.value : target.checked
      // console.log(values);

        this.setState({
          //  firstName: target.value
           [name] : values
        })
  }

  handleOnSubmit = (e) => {

    e.preventDefault();

    
    const isformvalidate = this.validateFields()
    if (isformvalidate) {

      this.setState((state) => {
        return { submitted: this.state.submitted + 1 }
      })
      
      /* this.setState({
        submitted: this.state.submitted + 1
      }) */
    }
    
    
   /*  this.validateFields()

    this.setState({
      submitted: this.state.submitted + 1
    }); */

  };

  validateFields() {

    /* const { firstName, feedBack, acceptedTerms } = this.state
    const errors = {}

    console.log(firstName);
    console.log(!firstName);

    if (!firstName) {
      // console.log(fn);
      errors['firstName'] = ' First Name Cannot be empty'
      console.log(errors);
      console.log(firstName);
    }

    if (!feedBack) {
      errors['feedBack']=' Feedback  Cannot be empty'
    } else if(feedBack && feedBack.length < 5){
      errors['feedBack']=' Feedback  should atleast 5 character'
    }

    if (!acceptedTerms) {
      errors['acceptedTerms']=' Please Accept Terms'
    }

    this.setState({
      validatetionErrors : errors 
    })

    return Object.keys(errors).length === 0; */

    //--------------- another way-------

    const { firstName : fn, feedBack : fb, acceptedTerms: at } = this.state
    const errors = {}

    console.log(fn);
    console.log(!fn);

    if (!fn) {
      // console.log(fn);
      errors['fn'] = ' First Name Cannot be empty'
      console.log(errors);
      console.log(fn);
    }

    if (!fb) {
      errors['fb']=' Feedback  Cannot be empty'
    } else if(fb && fb.length < 5){
      errors['fb']=' Feedback  should atleast 5 character'
    }

    if (!at) {
      errors['at']=' Please Accept Terms'
    }

    this.setState({
      validatetionErrors : errors 
    })

    return Object.keys(errors).length === 0;
  }


  render() {

    const {
      fn: firstNameError,
      fb : feedBackError,
      at: acceptedTermsError
    } = this.state.validatetionErrors

  /*   const {
      firstName: firstNameError,
      feedBack: feedBackError,
      acceptedTerms: acceptedTermsError
    } = this.state.validatetionErrors */
    
   
    
    return (
      <>
        <section>
          <form onSubmit={this.handleOnSubmit}>
                    <h3> Form Valid</h3>
                    
            <div>
              <label>
                <span>{ firstNameError}</span>
                <input
                  onChange={this.handleOnChange}
                  type="text"
                  name="firstName"
                  placeholder="Enter the name"
                  value={this.state.firstName}
                  />
              </label>
                    </div>
                    
            <div>
              <label>
                <span>{ feedBackError}</span>
                <input
                  onChange={this.handleOnChange}
                  type="text"
                  name="feedBack"
                  placeholder="FeedBack"
                  value={this.state.feedBack}
                  />
              </label>
                    </div>
                    
            <div>
              <label>
                <span>{ acceptedTermsError}</span>
                <input
                  onChange={this.handleOnChange}
                  type="Checkbox"
                  name="acceptedTerms"
                  checked={this.state.acceptedTerms}
                  value={this.state.firstName}
                />
                I accept the terms
              </label>
            </div>

            <button type="submit">Submit</button>
                    <p>submitted {this.state.submitted} times!</p>
                    
          </form>
        </section>
      </>
    );
  }
}
