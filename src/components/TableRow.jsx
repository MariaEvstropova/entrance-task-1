import React from 'react';

export default class TableRow extends React.Component {
    render() {
        return (
            <tr className={!!this.props.video ? "finished" : ""} >
                <td data-th="Школа">
                {
                    Array.isArray(this.props.school) ? (
                        this.props.school.map((school, index) => {
                            return <div className="sub-row" key={index}>{school}</div>;
                        })
                    ) : this.props.school
                }
                </td>
                <td data-th="Лекция">{this.props.lecture}</td>
                <td data-th="Лектор" className={Array.isArray(this.props.teacher) ? "td-sub" : ""} onClick={this.props.handleTeaherDetails.bind(this, this.props.teacher)}>
                {
                    Array.isArray(this.props.teacher) ? (
                        this.props.teacher.map((teacher, index) => {
                            return <div className="sub-row" key={index} onClick={this.props.handleTeaherDetails.bind(this, teacher)}>{teacher}</div>
                        })
                    ) : this.props.teacher
                }
                </td>
                <td data-th="Дата">{this.props.date}</td>
                {
                    !!this.props.video ? (
                        <td data-th="Видео">
                            <a href={this.props.video} target="_blank">Видео</a>
                        </td>
                    ) : (
                        <td data-th="Место">{this.props.place}</td>
                    )
                }
            </tr>
        );
    }
}
