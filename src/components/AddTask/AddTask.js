import React, { Component } from 'react';
import './AddTask.css';

class addTask extends Component {
    state = {
        value : ''
    }

    addTask = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const value = this.state.value;

        this.props.addTaskToList(value);
        this.setState({
            value: ''
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.addTask} value={this.state.value} />
                <input type="submit" value="Add Task" />
            </form>
        )
    }
}

export default addTask;