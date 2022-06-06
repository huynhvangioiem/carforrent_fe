import {TextField} from "../../utils/CreateFormGroup";

export const RenderFormTextField = (props) => {
  const formFieldsData = props.children;
  let textFields = formFieldsData.map((field, index) => <TextField key={index}>{field}</TextField>)
  return (
    <>
      {textFields}
    </>
  )
}
