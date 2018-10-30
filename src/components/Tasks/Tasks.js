import React from 'react';
import './Tasks.css';
import TaskItem from '../TaskItem/TaskItem';

const Tasks = (props) => {
    return (
        <ul className="Tasks">
            {props.tasks.map((task, index) => {
                return (
                    <TaskItem task={task} key={index} />
                )
            })}
        </ul>
    )
}

export default Tasks;