import React from 'react';
import DataTables from "../Datatable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TableCar(props) {

  const { edit, del } = props;

  const handleEdit = (id) => {
    edit(id);
  }
  const handleDelete = (id) => {
    del(id);
  }

  const {data} = props;

  const columns = [
    {
      key: "id",
      title: "ID",
      textAlign: "center",
    },
    {
      key: "Brand",
      title: "Brand",
      textAlign: "center",
    },
    {
      key: "Description",
      title: "Description",
      textAlign: "center",
    },
    {
      key: "Price",
      title: "Price",
      textAlign: "center",
    },
    {
      key: "img",
      title: "Image",
      textAlign: "center",
    },
    {
      title: "Tùy Chọn",
      Content: (id) => (
        <>
          <button type="button" onClick={e => handleEdit(id)} className="btn btn-info"><FontAwesomeIcon icon="fa-solid fa-pen" /></button>
          <button type="button" onClick={e => handleDelete(id)} className="btn btn-danger"><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>
        </>
      ),
      textAlign: "center",
      minWidth: "150px",
    },
  ]
  return (
    <DataTables dataTables={data} columns={columns} idKey="id"/>
  );
}

export default TableCar;
