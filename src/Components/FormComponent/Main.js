import React from "react";
import 'react-responsive-modal/styles.css';
import FormArray from "./FormArray.json";
import TypeCheckbox from "./TypeCheckbox";
import TypeInput from "./TypeInput";
import TypeRadio from "./TypeRadio";
import TypeTextarea from "./TypeTextarea";
import TypeFile from "./TypeFile";
import TypeSelect from "./TypeSelect"
import TypeNumber from "./TypeNumber";
import {Modal} from 'react-responsive-modal';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:"",
      lastname:"",
      gender:"", 
      language:"choose",
      likes: [],
      profile: '',
      openModal: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
 
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onCloseModal = ()=>{
    this.setState({
      firstname:'',
      lastname:'',
      gender:'',
      language:'choose',
      likes: [],
      profile: null,
      openModal : false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({openModal : true});
  }

  handleCheckBox(event) {
    let state = this.state;
    if (state.likes.includes(event.target.name)) {
      state.likes.splice(state.likes.indexOf(event.target.name), 1);
    } else {
      state.likes.push(event.target.name);
    }
    this.setState({
      likes: state.likes
    });
  }

  handleRadio(event){
    this.setState({
      gender: event.target.value
    });
  }

  handleFile(event){
    this.setState({ profile: event.target.files[0].name });
  }
  
  render() {
    const allowedType = ["text", "tel", "password", "email"];
   
    FormArray.fields.sort((first, second) => {
      return first.order - second.order;
    });
   
    return (
      <div className="container py-3">
      <div className="row">
        <div className="col-6 mx-auto">
          <div>
            <Modal open={this.state.openModal} onClose={this.onCloseModal}>
              <div className="px-5 m-3">
                <h1>Data Recieved:</h1>
                <div>
                  <p>First Name: {this.state.firstname}</p>
                  <p>Last Name : {this.state.lastname}</p>     
                  <p>Language : {this.state.language}</p> 
                  <p>Gender : {this.state.gender}</p>  
                  <p>Games : {this.state.likes}</p>   
                  <p>Profile: {this.state.profile}</p> 
                </div>
              </div>
            </Modal> 
            <form
              className="form-group p-3 bg-light shadow rounded"
              onSubmit={(event) => {
                this.handleSubmit(event);
              }}
            >
              <h2 className="px-4">General Form</h2>
              {FormArray.fields.map((element, index) => {
                if (allowedType.includes(element.type)) {
                  return (
                    <TypeInput
                      key={element.key}
                      attribute={element}
                      valueToInput={this.state[`${element.key}`]}
                      dataChange={this.handleChange}
                    />
                  );
                } else if (element.type === "number") {
                  return (
                    <TypeNumber
                      key={index.toString()}
                      attribute={element}
                      dataChange={this.handleChange}
                      valueToInput={this.state[`${element.key}`]}
                    />
                  );
                } else if (element.type === "textarea") {
                  return (
                    <TypeTextarea
                      key={index.toString()}
                      attribute={element}
                      dataChange={this.handleChange}
                      valueToInput={this.state[`${element.key}`]}
                    />
                  );
                } else if(element.type === "select"){
                    return(
                      <TypeSelect
                      key={element.key}
                      attribute={element}
                      valueToInput={this.state.language}
                      dataChange={this.handleChange}
                      />
                    )
                }
                else if (element.type === "radio") {
                  return (
                    <TypeRadio
                      key={index.toString()}
                      attribute={element}
                      dataChange={this.handleRadio}
                      checkedItem={this.state.gender}
                    />
                  );
                }
                else if (element.type === 'checkbox') {
                  return (
                        <TypeCheckbox
                          key={element.key}
                          attribute={element}
                          dataChange={this.handleCheckBox}
                          checkedItem = {this.state.likes}
                        />
                      );
                }
                else if(element.type === "file") {
                  return(
                    <TypeFile
                    key={index.toString()}
                    attribute={element}
                    dataChange={this.handleFile}
                    />
                  )
                }
                else {
                  return null;
                }
              })
            }
            <input type="submit" value="submit" className="btn btn-primary mx-4 my-2"/>
            </form>
          </div>
        </div>
      </div>  
    </div>
    );
  }
}
export default Main;
