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
    }

    addTask(taskName) {
        const task = <Task onClick={this.deleteTask} name={taskName} />
        let tasksList = this.state.tasks
        tasksList.push(task)
        this.setState({ tasks: tasksList })
    }

    deleteTask(task) {
        let tasksList = this.state.tasks
        const index = this.findTaskByName(task.props.name);
        if (index > -1) {
            tasksList.splice(index, 1);
            this.setState({ tasks: tasksList })
        }
    }

    findTaskByName(taskName) {
        let tasksList = this.state.tasks
        let i = 0;
        let found = false;
        while(i < tasksList.length && !found){
            if(tasksList[i].props.name === taskName) {
                found = true;
            } else {
                i++;
            }
        }
        return found ? i : -1;
    }

    render() {
        return (
            <div className="MainPane">
                <h1>To Do List</h1>
                <SubmitBar onClick={this.addTask} />
                <TaskList list={this.state.tasks} />
            </div>
        )
    }
}