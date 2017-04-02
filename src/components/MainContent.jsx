import React from 'react';
import FilterInput from './FilterInput.jsx';
import Table from './Table.jsx';

export default class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            school: "",
            teacher: "",
            date: ""
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    handleFilterChange(type, value) {
        this.setState({
            [type]: value
        })
    }

    filterData(schoolFilter, teachrFilter, dateFilter, data) {
        let regexSchool = new RegExp(schoolFilter, 'i');
        let regexTeacher = new RegExp(teachrFilter, 'i');
        let regexDate = new RegExp(dateFilter, 'i');

        let result = data.filter((item) => {
            //Т.к. школы могут быть как массивом, так и строкой рассматриваем 2 варианта
            let schoolTest = false;
            if (Array.isArray(item.school)) {
                for (let i = 0; i < item.school.length; i++) {
                    if (regexSchool.test(item.school[i])) {
                        schoolTest = true;
                        break;
                    }
                }
            } else {
                schoolTest = regexSchool.test(item.school);
            }
            //Т.к. лекторы могут быть как массивом, так и строкой рассматриваем 2 варианта
            let teacherTest = false;
            if (Array.isArray(item.teacher)) {
                for (let i = 0; i < item.teacher.length; i++) {
                    if (regexTeacher.test(item.teacher[i])) {
                        teacherTest = true;
                        break;
                    }
                }
            } else {
                teacherTest = regexTeacher.test(item.teacher);
            }

            return (
                schoolTest && teacherTest && regexDate.test(item.date)
            );
        });

        return result;
    }

    render() {
        return (
            <div>
                <div className="filter-options">
                    <FilterInput inputName="school" labelText="Школа" handleFilterChange={this.handleFilterChange}/>
                    <FilterInput inputName="teacher" labelText="Лектор" handleFilterChange={this.handleFilterChange}/>
                    <FilterInput inputName="date" labelText="Дата" handleFilterChange={this.handleFilterChange}/>
                </div>
                <Table
                    tableData={this.filterData(this.state.school, this.state.teacher, this.state.date, this.props.data)}
                    handleTeaherDetails={this.props.handleTeaherDetails.bind(this)}
                />
            </div>
        );
    }
}
