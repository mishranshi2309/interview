import React from "react";
class TypeFile extends React.Component {
  render() {
    const {
      attribute: { type, label, key , isRequired, isReadonly }, dataChange, valueToInput
    } = this.props;
    return (
      <div className="form-group px-4 py-2">
        <label>{label}</label>
        <br/>
        <input
          type={type}
          name={key}
          onChange={dataChange}
          className="form-control"
          value={valueToInput}
          readonly={isReadonly?'true':null}
          required={isRequired?'required':null}
        />
      </div>
    );
  }
}

export default TypeFile;
