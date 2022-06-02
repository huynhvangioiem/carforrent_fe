import {Button} from "../../../components/FormElement";

export default function FormAction(props) {
    const actions = props.children;
    let action = actions.map((action, index) =>
        <Button key={index} type={action.btnType} style={action.btnStyle}>
            {action.btnLable}
        </Button>
    )
    return (<div className="form-group action">{action}</div>)
}
