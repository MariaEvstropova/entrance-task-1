import React from 'react';

export default class FilterInput extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event) {
        let value = event.target.value;
        this.setState({
            value: value
        });
        this.props.handleFilterChange(this.props.inputName, value);
    }

    render() {
        return (
        <div className="filter-option">
            <label htmlFor={this.props.inputName + "-filter"}>{this.props.labelText}</label>
            <input id={this.props.inputName + "-filter"} type="text" value={this.state.value} onChange={this.handleTextChange} />
        </div>
        );
    }
}
