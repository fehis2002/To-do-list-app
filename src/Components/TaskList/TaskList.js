import React from "react";
import './TaskList.css';

export class TaskList extends React.Component {

    render() {

        const tasks = this.props.list.map((task, i) => {
            return <li key={'task_' + i}>{task}</li>;
        })

        return (
            <div className="taskList">
                <ol>
                    {tasks}
                </ol>
            </div>
        )
    }

}