import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    render() {
        return (
            <ul>
                <TaskItem title={'Task 1'} />
                <TaskItem title={'Task 2'} />
                <TaskItem title={'Task 3'} />
            </ul>
        );
    }
}


export default TaskList;
