import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        // console.log("In Todo:\n" + this.props.todoItem);
        return (
            <div>
                <input 
                    type="checkbox" 
                    name="checklistItem1" 
                    value={this.props.todoItem.todo} 
                    checked={this.props.todoItem.checked}
                    onChange={() => this.props.handleChange(this.props.todoItem.id)}
                />
                <label htmlFor="checklistItem1">{this.props.todoItem.todo}</label><br/>
            </div>
    
        )

    }
}

export default Todo