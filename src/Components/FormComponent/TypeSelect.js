import React from "react";
class TypeSelect extends React.Component {
  render() {
    const {
      attribute: { label, key , items }, dataChange, valueToInput
    } = this.props;
    
    return (
      <div className="form-group px-4 py-2">
        <label>{label}</label>
        <br/>
        <select onChange={dataChange} name={key} className="form-control" value={valueToInput}>
        <option value='choose'>Choose language</option>
        {
            items.map((opt, index)=>{
                return (<option key={index} value={opt} >{opt}</option>)
            })
        }
        </select>
        
      </div>
    );
  }
}

export default TypeSelect;
