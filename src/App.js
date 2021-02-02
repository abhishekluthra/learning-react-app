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

import Todo from  './lessions1-27/components/Todo';
import TodoData from './lessions1-27/data/TodoData';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: TodoData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        console.log(id);
    }

    render() {
        const todoComponents = this.state.todoItems.map( item => {
            return <Todo 
                        key={item.id} 
                        todoItem={item} 
                        handleChange={this.handleChange}
                    />
        })
        return (
            <div>
                {todoComponents}
            </div>
        )

    }
}

export default App