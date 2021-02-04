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
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
            </div>
        )
    }
}

export default App