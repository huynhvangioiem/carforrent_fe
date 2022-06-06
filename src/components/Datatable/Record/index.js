import {Cell} from "../Cell";

export const Record = ({columns, recordData, idKey}) => {
  var result = columns.map((column, index) => (<Cell key={index} column={column} idKey={idKey} record={recordData}/>))
  return (<tr className="dtTableRow">{result}</tr>);
}
