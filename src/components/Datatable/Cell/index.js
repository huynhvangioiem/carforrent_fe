export const Cell = ({column, record, idKey}) => {
  let key = column.key
  let style = {
    textAlign: column.textAlign ? column.textAlign : "",
    minWidth: column.minWidth ? column.minWidth : "",
    maxWidth: column.maxWidth ? column.maxWidth : "",
  };

  if (key) {
    return (<td style={style} className="dtTableCell">{record[key]}</td>)
  } else {
    let action = column.Content;
    return (<td style={style} className="dtTableCell actionCell">{action(record[idKey])}</td>)
  }
}
