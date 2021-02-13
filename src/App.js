import React from 'react';

// // Lesson 29
// import Todo from  './lessions1-27/components/Todo';
// import TodoData from './lessions1-27/data/TodoData';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todoItems: TodoData
//         };
//     }

//     render () {
//         console.log("In App: \n" + this.state.todoItems)
//         const todoComponents = this.state.todoItems.map( (item) => {
//             return <Todo key={item.id} todoItem={item}/>
//         });

//         return (
//             <div className="todo-list">
//                 {todoComponents}
//             </div>
//         )
//     }
// }

// lesson 30

// class App extends React.Component {
    
//     handleClick() {
//         console.log("in handle")
//         alert("Clicked!")
//     }

//     render() {
//         return (
//             <div>
//                 <img src="https://www.fillmurray.com/200/100/" onMouseOver={this.handleClick} />
//                 <br />
//                 <br />
//                 <button onClick={this.handleClick} >Click Me</button>
//             </div>
//         )
//     }
// }

// lesson 31
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 1,
//         };
//         this.handleClickDouble = this.handleClickDouble.bind(this);
//         this.handleClickHalf = this.handleClickHalf.bind(this);
//     }

//     handleClickDouble() {
//         this.setState( prevState => {
//             return {
//                 count: prevState.count * 2
//             }
//         });
//     }

//     handleClickHalf() {
//         this.setState( prevState => {
//             return {
//                 count: prevState.count / 2
//             }
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Counter count={this.state.count}/>
//                 <button onClick={this.handleClickDouble}>Double</button>
//                 <button onClick={this.handleClickHalf}>Half</button>
//             </div>
//         )
//     }
// }

// export default App

// // my addition to lesson 31
// class Counter extends React.Component {
//     constructor(props) {
//         super()
//     }
//     render() {
//         console.log("In counter: " + this.props);
//         return (
//             <div>
//                 <h1>Current Count: {this.props.count}</h1>
//             </div>
//         )
//     }
// }

// lesson 33

// import Todo from  './lessions1-27/components/Todo';
// import TodoData from './lessions1-27/data/TodoData';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todoItems: null
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(id) {
//         this.setState( prevState => {
//             const newTodoItemState = prevState.todoItems.map(item => {
//                 if(item.id === id) {
//                     item.checked = !item.checked
//                 }
//                 return item;
//             });
//             console.log(newTodoItemState);
//             return {
//                 todoItems: newTodoItemState,
//             }; 
//         });
//     }

//     componentDidMount() {
//         setTimeout( () => {
//             this.setState({
//                 todoItems: TodoData,
//             });
//         }, 1500)
//     }

//     render() {
//         console.log(this.state.todoItems);
//         let todoComponents;
//         if (this.state.todoItems) {
//             todoComponents = this.state.todoItems.map( item => {
//                 return <Todo 
//                             key={item.id} 
//                             todoItem={item} 
//                             handleChange={this.handleChange}
//                         />
//             });
//         } else {
//             todoComponents = <h1>Loading...</h1>
//         }
        
//         return (
//             <div>

//                 {todoComponents}
//             </div>
//         );

//     }
// }


// lesson 38 practice

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoggedIn: false
//         };
//         this.handleClick=this.handleClick.bind(this);
//     }

//     handleClick() {
//         console.log("in login. Current State: " + this.state.isLoggedIn);
//         this.setState( (prevState) => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         });
//     }

//     render() {
//         return(
//             <div>
//                 {this.state.isLoggedIn ? <h1>You are logged in</h1> : <h1>You are logged Out</h1>}
//                 <button onClick={this.handleClick}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
//             </div>
//         )
//     }
// }

// Lesson 39 practice

// import Todo from  './lessions1-27/components/Todo';
// import TodoItems from './lessions1-27/data/TodoData';

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: TodoItems
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     todo.checked = !todo.checked
//                 }
//                 return todo
//             })
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }
    
//     render() {
//         const todoItems = this.state.todos.map(item => {
//             if(item.checked) {
//                 return <Todo key={item.id} todoItem={item} handleChange={this.handleChange} />
//             } else {
//                 return <Todo key={item.id} todoItem={item} handleChange={this.handleChange} />                
//             }
//         })
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }

// lesson 40 practice

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoading: true,
//             data: {}
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then( response => {
//                 console.log(response);
//                 return response.json();
//             })
//             .then( data => {
//                 console.log(data)
//                 this.setState( (prevState) => {
//                     return {
//                         isLoading: !prevState.isLoading,
//                         data: data
//                     }  
//                 })
//             })
//     }

//     render() {
//         const text = this.state.isLoading ? "Loading..." : this.state.data.title;
//         return (
//             <h1>{text}</h1>
//         )
//     }
// }

// lesson 41 practice

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            almonds: false,
            chocolate: false,
            peanuts: false,
            other: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        type !== "checkbox" ? this.setState({ [name]: value,}):
                                this.setState({ [name]: checked}); 
    }
    
    render() {
        return (
            <main>
                <form>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} /><br />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}  /><br />
                    <input type="number" name="age" placeholder="Age" onChange={this.handleChange}  /><br />
                    
                    <label>
                        <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"} onChange={this.handleChange} />
                        Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} onChange={this.handleChange} />
                        Male
                    </label>
                    <br />

                    <select name="destination" value={this.state.destination} onChange={this.handleChange} placeholder="Select Destination">
                        <option value="" >Select Destination</option>
                        <option value="Barcelona" >Barcelona</option>
                        <option value="London" >London</option>
                        <option value="Amsterdamn" >Amsterdam</option>
                    </select>
                    <br />
                    <label>Dietart Restrictions: </label>
                    <br />
                    <input type="checkbox" name="almonds" value="almonds" checked={this.state.almonds} onChange={this.handleChange}/>
                    <label htmlFor="almonds">Almonds</label>
                    <input type="checkbox" name="chocolate" value="chocolate"  checked={this.state.chocolate} onChange={this.handleChange}/>
                    <label htmlFor="chocolate">Chocolate</label>
                    <input type="checkbox" name="peanuts" value="peanuts" checked={this.state.peanuts} onChange={this.handleChange}/>
                    <label htmlFor="peanuts">Peanuts</label>
                    <input type="checkbox" name="other" value="other" checked={this.state.other} onChange={this.handleChange}/>
                    <label htmlFor="other">Other</label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                </p>
                <p>
                    { this.state.almonds ? "Almonds, " : ""}
                    { this.state.chocolate ? "Chocolate, " : ""}
                    { this.state.peanuts ? "Peanuts, " : ""}
                    { this.state.other ? "Other" : ""}
                </p>
            </main>
        )
    }
}

// still no chagnes
export default App