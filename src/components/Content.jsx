import React from 'react';
import MainContent from './MainContent.jsx';
import ModalWindow from './ModalWindow.jsx';
import {data} from './tableData';
import {teacherData} from './teacherData';

export default class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            modalShown: false,
            modalData: ""
        };
        this.handleTeaherDetails = this.handleTeaherDetails.bind(this);
    }

    handleTeaherDetails(name) {
        let data = teacherData.find((teacher) => {
            return teacher.name == name;
        });

        if (data) {
            this.setState({
                modalShown: true,
                modalData: data
            });
        }
    }

    render() {
        return (
            <div>
                <MainContent data={data} handleTeaherDetails={this.handleTeaherDetails}/>
                <ModalWindow data={this.state.modalData} shown={this.state.modalShown}/>
            </div>
        );
    }
}
