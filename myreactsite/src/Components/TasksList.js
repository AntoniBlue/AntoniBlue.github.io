import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    constructor(prop) {
        super()

        this.state = {
            tasks: [
                'Task 1',
                'Task 2',
                'Task 3',
            ],
            filter: 'all',
            newTask: '',
        }


    }

    newTaskChangeHandler(e) {
        this.setState({ newTask: e.target.value })
    }

    addNewTaskHandler(e) {
        e.preventDefault();
        this.setState((state, props) => ({
            tasks: [...state.tasks, state.newTask],
            newTask: '',
        }))
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.tasks.map(x => <TaskItem key={x} title={x} />)}
                </ul>

                <form onSubmit={this.addNewTaskHandler.bind(this)}>
                    <label htmlFor="new-task"></label>
                    <input
                        type="text"
                        id="new-task"
                        name="newTask"
                        value={this.state.newTask}
                        onChange={this.newTaskChangeHandler.bind(this)}
                    />

                    <input type="submit" value="Add" />
                </form>
            </>
        );
    }
}


export default TaskList;
