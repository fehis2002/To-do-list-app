import React from "react";
import { SubmitBar } from "../SubmitBar/SubmitBar";
import { TaskList } from "../TaskList/TaskList";
import { Task } from "../Task/Task";
import './MainPane.css'

export class MainPane extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tasks: [] }
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.isTaskNameUnique = this.isTaskNameUnique.bind(this);
    }

    /**
     * Adds a task to the list of tasks
     * @param {String} taskName 
     */
    addTask(taskName) {
        if (this.isTaskNameUnique(taskName)) {
            const task = <Task onClick={this.deleteTask} name={taskName} method={this.props.method}/>;
            let tasksList = this.state.tasks;
            tasksList.push(task);
            this.setState({ tasks: tasksList });
        } else {
            window.alert('The filled in task already exists. Please fill in another task.');
        }
    }

    /**
     * Deletes a given task from the list of tasks
     * @param {Task} task 
     */

    deleteTask(task) {
        let tasksList = this.state.tasks
        const index = this.findTaskByName(task.props.name);
        if (index > -1) {
            tasksList.splice(index, 1);
            this.setState({ tasks: tasksList })
        }
    }

    /**
     * Finds a taskname in the list of tasks
     * @param {String} taskName 
     * @returns index of the task in the list or -1 if not found
     */
    findTaskByName(taskName) {
        let tasksList = this.state.tasks
        let i = 0;
        let found = false;
        while (i < tasksList.length && !found) {
            if (tasksList[i].props.name === taskName) {
                found = true;
            } else {
                i++;
            }
        }
        return found ? i : -1;
    }

    /**
     * Checks wether a given taskname is unique
     * @param {String} taskName 
     * @returns false if taskname isn't unique, true if it is unique
     */
    isTaskNameUnique(taskName) {
        let unique = true;
        let i = 0;
        while (i < this.state.tasks.length && unique) {
            if (taskName === this.state.tasks[i].props.name) {
                unique = false;
            }
            i++;
        }

        return unique;
    }

    render() {
        return (
            <div id="MainPane">
                <h1>To Do List</h1>
                <SubmitBar onClick={this.addTask} />
                <TaskList list={this.state.tasks} />
            </div>
        )
    }
}