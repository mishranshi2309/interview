import React from "react";
class TypeRadio extends React.Component {
  render() {
    let {
      attribute: { type, label, items, key } ,
      dataChange,
      checkedItem
    } = this.props;
    return (
      <div className="form-group px-4 radio-group">
        <label>{label}</label>
        {items.map((opt, index) => (
          <div key={index.toString()} className="d-flex form-check" id={`hii${checkedItem}`}>
            <input
              id={index}
              onChange={dataChange}
              type={type}
              className="form-check-input my-2"
              name={key}
              value={opt}
              checked={checkedItem===opt}
            />
            <label className="mx-2">{opt}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default TypeRadio;
