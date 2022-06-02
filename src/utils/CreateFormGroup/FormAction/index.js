import {Button} from "../../../components/FormElement";
import clsx from "clsx";

export default function FormAction(props) {
    const actions = props.children;
    let action = actions.map((action, index) =>
        <Button key={index} type={action.btnType} style={action.btnStyle}>
            {action.btnLable}
        </Button>
    )
    return (<div className={clsx("form-group action",props.customClass)}>{action}</div>)
}
