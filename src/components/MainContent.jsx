import React from 'react';
import FilterInput from './FilterInput.jsx';
import Table from './Table.jsx';
import {data} from './tableData';

export default class MainContent extends React.Component {
    render() {
        return (
            <div>
                <div className="filter-options">
                    <FilterInput inputName="school" labelText="Школа"/>
                    <FilterInput inputName="teacher" labelText="Лектор"/>
                    <FilterInput inputName="date" labelText="Дата"/>
                </div>
                <Table tableData={data}/>
            </div>
        );
    }
}
