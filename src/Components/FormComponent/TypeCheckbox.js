import React from "react";
class TypeCheckbox extends React.Component {
  render() {
    const {
      attribute: { type, label, items },
      dataChange,
      checkedItem
    } = this.props;

    return (
      <div className="form-group px-4" >
        <label>{label}</label>
        {items.map((opt, index) => (
          <div key={index.toString()} className="d-flex form-check">
            <input
              onChange={dataChange}
              type={type}
              className="form-check-input my-2"
              name={opt}
              value={opt}
              checked={checkedItem.includes(opt)} 
            />
            <label className="mx-2">{opt}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default TypeCheckbox;
