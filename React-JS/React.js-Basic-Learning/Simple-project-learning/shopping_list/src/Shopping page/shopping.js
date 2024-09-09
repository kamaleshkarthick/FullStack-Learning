import React, { Component } from "react";
// import "./shopping.css";
export default class Shopping extends Component {
  constructor(props) {
    super(props);
      this.state = {
        // donot give empty space object string (ex newItemName: ' ' the way get true cause of space)
      newItemName: '',
      groceryItems: [
        { name: " banans", id: "0", completed: false },
        { name: " lemon", id: "1", completed: false },
        { name: " soap", id: "2", completed: false },
      ],
      validationErrors: {},
      Submitted: 0,
    };
  }
    handleOnChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    // this.setState({ newItemName: e.target.value });
    }
    handleCompletedCheckbox = (e) => {
        
        const target = e.target 
        const itemindexvalue = target.attributes.itemindex.value
          console.log(itemindexvalue)

        const index = parseInt(itemindexvalue ,10) 

        const newToggle = [...this.state.groceryItems]
         newToggle[index].completed= target.checked
        this.setState({
            groceryItems : newToggle
        })
        
        
    }
    handleDelete = (e) => {

        console.log (e)
        const target = e.target 
        const itemindexvalue = target.attributes.itemindex.value
          console.log(itemindexvalue)

        const index = parseInt(itemindexvalue ,10) 

        const newGdelete = [...this.state.groceryItems]
        newGdelete.splice(index, 1)
        this.setState({
            groceryItems : newGdelete
        })
        
    }
    
    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(this.validation())
        const isformvalid = this.validation()
        console.log(isformvalid)
        if (isformvalid) {
            const newGroceryItemObject = {
                name: this.state.newItemName,
                completed: false,
                
            }

            this.setState((state) => {
                return {
                    groceryItems: [...state.groceryItems, newGroceryItemObject],
                    newItemName: '',
                    Submitted: this.state.Submitted +1,
                }
}
            )
            
        }
    }
    validation() {
        const { newItemName } = this.state
        const errors = {};
        console.log(!newItemName);
        if (!newItemName) {
            errors['newItemName']='plese enter item'
        }
          
        this.setState({
            validationErrors: errors
            
        })
        console.log(this.state.validationErrors)
        console.log(errors.newItemName)
       

        return Object.keys(errors).length === 0;
    }
        
    render() {
        const { groceryItems } = this.state
        const{newItemName : newItemNameError}=this.state.validationErrors
    return (
      <>
        <section>
                <h3>Shopping List</h3>
                
                <ul>
                    {groceryItems.map((item, i) => {
                        return (
                            <div key={i}>
                               
                                <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={this.handleCompletedCheckbox}
                                    itemindex={i}
                                />
                                <span>{item.name}</span>
                                <button onClick={this.handleDelete} itemindex={i}>DELETE</button>
                            </div>

                        )
                    })}
                </ul>

          <form onSubmit={this.handleOnSubmit}>
                  
                    <label>
                        <span>{newItemNameError }</span>
            <input
              onChange={this.handleOnChange}
              name="newItemName"
              type="text"
                placeholder="enter the items"
                // value={this.state.newItemName}
            /></label>
            <button>SUBMIT</button>
                    <p>Submitted {this.state.Submitted} times !</p>
                    
          </form>
        </section>
      </>
    );
  }
}

/* <header>
          <div className="container">
            <h3 className="header__username">johnnycopes</h3>
            <h1 className="header__title">Shopping List</h1>
          </div>
        </header>

        <main>
          <div className="container">
            <input
              className="submission-line__input"
              type="text"
              maxLength={20}
              placeholder="Enter new item here..."
            />
            <button className="submission-line__btn">Add</button>

            <ul className="list">
              <li className="list__item">
                <a className="list__delete-btn" href=" ">
                  X
                </a>
                Milk
                <a className="list__check-btn" href=" ">
                  ✔
                </a>
              </li>
              <li className="list__item">
                <a className="list__delete-btn" href=" ">
                  X
                </a>
                Eggs
                <a className="list__check-btn" href=" ">
                  ✔
                </a>
              </li>
              <li className="list__item list__item--checked">
                <a
                  className="list__delete-btn list__delete-btn--checked"
                  href=" "
                >
                  X
                </a>{" "}
                Bread
                <a
                  className="list__check-btn list__check-btn--checked"
                  href=" "
                >
                  ✔
                </a>
              </li>
            </ul>
          </div>
        </main> */
