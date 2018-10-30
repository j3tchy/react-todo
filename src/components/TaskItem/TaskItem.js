import React, { Component } from 'react';

/*
    This component displays each individual list item. 
    The functionality includes striking the name when the item has been checked.
    The check state is based on a boolean set by the checkbox. If the state is true, 
    the <strike></strike> (strikethrough) tag is added to the text. If not, just the task 
    name is passed through.
*/

class TaskItem extends Component {
    state = {
        finished: false
    }

    handleChange = (event) => {
        const finished = event.target.checked;

        this.setState({
            finished: finished
        })
    }

    render () {
        const finished = this.state.finished;
        let text = '';

        if (finished) {
            text = <strike>{this.props.task}</strike>;
        } else {
            text = this.props.task;
        }

        return (
            <li key={this.props.index}>
                <input type="checkbox" value={this.props.task} onChange={this.handleChange} checked={this.finished} />
                {text}
            </li>
        )
    }
}

export default TaskItem;