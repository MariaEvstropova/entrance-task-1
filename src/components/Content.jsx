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
        this.handleTeacherDetails = this.handleTeacherDetails.bind(this);
    }

    handleTeacherDetails(name) {
        let data;
        for (let i = 0; i < teacherData.length; i++) {
            if (teacherData[i]["name"] == name) {
                data = teacherData[i];
                break;
            }
        }

        if (data) {
            this.setState({
                modalShown: true,
                modalData: data
            });
            let content = document.querySelector(".content");
            content.classList.add("fixed");
        }
    }

    render() {
        return (
            <div>
                <MainContent data={data} handleTeacherDetails={this.handleTeacherDetails}/>
                <ModalWindow data={this.state.modalData} shown={this.state.modalShown}/>
            </div>
        );
    }
}
