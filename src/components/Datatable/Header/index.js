export const ShowHeader = (props) => {
  const columns = props.children;
  const result = columns.map((column, index) => (
    <th className="dtHeader" key={index}>{column.title}</th>
  ))
  return (
    <>{result}</>
  )
}
