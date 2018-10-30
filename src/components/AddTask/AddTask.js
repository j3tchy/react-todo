import React, { Component } from 'react';
import './AddTask.css';

/*
    All the functionality for the search bar is handled in the component;
    An onChange event is applied to the search bar which udated the state when the value changes.
    When the task name is added, an 'onSubmit' event is added to the form.
    This pushes the value to the parent component 'App.js'. App.js adds this to the 
    tasks state which in turn passes it through the Tasks component. 
*/

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