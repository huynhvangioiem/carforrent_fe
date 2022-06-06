import React from 'react';
import {ShowHeader} from "./Header";
import {Record} from "./Record";
import "./style.scss";

function DataTables({dataTables, columns, idKey}) {
  return (
    <div className="dataTable-container">
      <table className="dataTables">
        <thead>
        <tr className="dtHeaderRow"><ShowHeader>{columns}</ShowHeader></tr>
        </thead>
        <tbody><ShowData columns={columns} idKey={idKey}>{dataTables}</ShowData></tbody>
      </table>
    </div>
  )
}
const ShowData = ({ columns, children, idKey }) => {
  let datas = children;
  let result = datas.map((record, index) => (<Record key={index} columns={columns} idKey={idKey} recordData={record} />))
  return (<>{result}</>);
}
export default DataTables;
