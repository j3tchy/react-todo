import React, { Component } from 'react';

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