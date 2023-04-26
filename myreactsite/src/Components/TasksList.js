import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    constructor(prop) {
        super(props)

        this.state = {
            tasks: [
                'Task 1',
                'Task 2',
                'Task 3',
            ],
            filter: [
                'all',
            ]
        }
    }
    render() {
        return (
            <ul>
                {this.state.tasks.map(x => <TaskItem title={x} />)}
            </ul>
        );
    }
}


export default TaskList;
