import React from "react";

export class SubmitBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const textField = document.querySelector('.SubmitBar > input');
        if(textField.value) {
            this.props.onClick(textField.value);
        }
    }

    render() {
        return (
            <div className="SubmitBar">
                <input type="text" placeholder="Enter task" />
                <input type="button" value="Add" onClick={this.handleClick}/>
            </div>
        );
    }
}