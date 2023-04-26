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
            filter: 'all',


        }
    }

    newTaskChangeHandler(e) {
        console.log(e.target.value);
        this.setState({ newTask: e.target.value })
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.tasks.map(x => <TaskItem key={x} title={x} />)}
                </ul>

                <form action="">
                    <label htmlFor="new-task"></label>
                    <input
                        type="text"
                        id="new-task"
                        name="newTask"
                        value={this.state.newTask}
                        onChange={this.newTaskChangeHandler}
                    />

                    <input type="submit" value="Add" />
                </form>
            </>
        );
    }
}


export default TaskList;
