import React from 'react';
import TableRow from './TableRow.jsx';

export default class Table extends React.Component {
    render() {
        let rows = this.props.tableData.map((data, index) => {
            return <TableRow {...data} key={index}/>
        });
        return (
            <table>
                <colgroup>
                    <col width="25%"/>
                    <col width="30%"/>
                    <col width="15%"/>
                    <col width="15%"/>
                    <col width="15%"/>
                </colgroup>
                <thead>
                <tr>
                    <th>Школа</th>
                    <th>Лекция</th>
                    <th>Лектор</th>
                    <th>Дата</th>
                    <th>Место</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}
