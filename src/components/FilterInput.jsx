import React from 'react';

export default class FilterInput extends React.Component {
    render() {
        return (
        <div className="filter-option">
            <label htmlFor={this.props.inputName + "-filter"}>{this.props.labelText}</label>
            <input id={this.props.inputName + "-filter"} type="text" />
        </div>
        );
    }
}
