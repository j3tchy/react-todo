import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';

/*
    Main App.js used to put the list and search bar together. 
    Event allows nearly created tasks to be turned into an array and fed
    a Tasks component.
*/

class App extends Component {
    state = {
        tasks: []
    }

    addTaskToList = (value) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.concat(value)
        }))
    }

    render() {
        return (
            <div className="Container">
                <AddTask addTaskToList={this.addTaskToList} /> 
                <Tasks tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;
