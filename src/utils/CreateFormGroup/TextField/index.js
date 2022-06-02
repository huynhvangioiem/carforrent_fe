import {Input, Label, MessageField} from "../../../components/FormElement";

export default function TextField(props) {
    const property = props.children;
    return (
        <div className="form-group">
            <Label for={property.nameField}>{property.icon}{property.label}</Label>
            <Input
                type={property.inputType}
                name={property.nameField}
                id={property.nameField}
                placeholder={property.placeholder}
                value={property.value}
                onChange={property.onChange}
                onInput={property.onInput}
                onBlur={property.onBlur}
                validateData={property.validateData}
            />
            <MessageField/>
        </div>
    )
}
