import {Checkbox, MessageField} from "../../../components/FormElement";

export default function CheckboxField(props) {
    const {label, ...property} = props;
    return (
        <label className="form-check-label">
            <div className="form-check">
                <Checkbox {...property}/>
                {label}
                <MessageField/>
            </div>
        </label>
    )
}
