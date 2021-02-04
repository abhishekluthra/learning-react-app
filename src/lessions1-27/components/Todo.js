import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let classNameText=''
        if(this.props.todoItem.checked) {
            classNameText = 'todo-item completed-item';
        } else {
            classNameText = 'todo-item incompleted-item';
        }

        return (
            <div className={classNameText}>
                <input 
                    type="checkbox" 
                    name="checklistItem1" 
                    value={this.props.todoItem.todo} 
                    checked={this.props.todoItem.checked}
                    onChange={() => this.props.handleChange(this.props.todoItem.id)}
                />
                <p>{this.props.todoItem.todo}</p>
            </div>
    
        )

    }
}

export default Todo