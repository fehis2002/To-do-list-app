import React from "react";

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
            <div>
                <input type='button' value='C'/>
                <p>{this.props.name}</p>
                <input type="button" value='X' onClick={this.handleClick}/>
            </div>
        );
    }

}