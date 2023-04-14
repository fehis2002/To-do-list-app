import React from "react";
import './Task.css';

export class Task extends React.Component {

    constructor(props){
        super(props);
        this.state = {complete: false}
        this.handleClick = this.handleClick.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    handleClick() {
        this.props.onClick(this);
    }

    completeTask() {
        this.setState({ complete: true})
    }

    render() {
        return (
            <div className="Task" style={{ opacity: this.state.complete ? 0.5 : 1,}}>
                <input type='button' value='C' onClick={this.completeTask} disabled={this.state.complete}/>
                <p style={{textDecorationLine: this.state.complete ? 'line-through' : 'none'}}>{this.props.name}</p>
                <input type="button" value='X' onClick={this.handleClick} disabled={this.state.complete}/>
            </div>
        );
    }

}