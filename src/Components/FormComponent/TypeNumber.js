import React from "react";
class TypeNumber extends React.Component {
  render() {
    const {
      attribute: { type, label, attr },valueToInput,
      dataChange,
    } = this.props;
    return (
      <div className="form-group px-4 py-2">
        <label>{label}</label>
        <input
          type={type}
          name={attr.name}
          placeholder={attr.placeholder}
          onChange={dataChange}
          className="form-control"
          value={valueToInput}
        />
      </div>
    );
  }
}

export default TypeNumber;
