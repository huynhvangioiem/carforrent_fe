import {Checkbox, MessageField} from "../../../components/FormElement";

export default function CheckboxField(props) {
    const property = props.children;
    return (
        <label className="form-check-label">
            <div className="form-check">
                <Checkbox
                    name={property.nameField}
                    id={property.nameField}
                    checked={property.checked}
                    onChange={property.onChange}
                    onInput={property.onInput}
                    onBlur={property.onBlur}
                    validateData={property.validateData}
                />
                {property.label}
                <MessageField/>
            </div>
        </label>
    )
}
