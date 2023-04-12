import React from "react";
import './Task.css';

export class Task extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this);
    }

    render() {
        return (
            <div className="Task">
                <input type='button' value='C'/>
                <p>{this.props.name}</p>
                <input type="button" value='X' onClick={this.handleClick}/>
            </div>
        );
    }

}