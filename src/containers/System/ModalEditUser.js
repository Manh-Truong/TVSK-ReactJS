import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: '',
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          address: '',
          phonenumber: ''
    }
  }


  componentDidMount() {
    let user = this.props.currentUser;
    // let { currenetUser } = this.props
    if (user && !_.isArguments(user)){
        this.setState({
            id: user.id,
            email: user.email,
            password: 'harcode',
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phonenumber:  user.phonenumber
        })
    console.log('didmount edit modla', this.props.currentUser);
  }}

  toggle = () => {
    this.props.toggleFormParent();
  };

  handleOnChangeInput = (event, id) => {

    //good code
      let copyState = {...this.state};
      copyState[id] = event.target.value;
      this.setState({
        ...copyState
      }); 
  }

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phonenumber'];
    for (let i = 0; i < arrInput.length; i++){
      if(!this.state[arrInput[i]]){
        isValid = false;
        alert('Missing pamameter: ' + arrInput[i]);
        break;
      } 
    }
    return isValid;
  }

  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      //call api edit user modal
      this.props.editUser(this.state)
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => { this.toggle() }}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader
         toggle={() => { this.toggle() }}
        >
          S???a ng?????i d??ng
        </ModalHeader>

        <ModalBody>
            <div className="modal-user-Body">
                <div className="input-container">
                    <label>Email</label>
                    <input 
                      // autocomplete="off"
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "email")}}
                      value={this.state.email}
                      disabled
                    />
                </div>
                <div className="input-container">
                    <label>M???t kh???u</label>
                    <input 
                      type="password" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "password")}}
                      value={this.state.password}
                      disabled
                    />
                </div>
                <div className="input-container">
                    <label>T??n</label>
                    <input 
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "firstName")}}
                      value={this.state.firstName}
                    />
                </div>
                <div className="input-container">
                    <label>H??? t??n</label>
                    <input 
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "lastName")}} 
                      value={this.state.lastName}
                      />
                </div>
                <div className="input-container max-with-input">
                    <label>?????a ch???</label>
                    <input 
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "address")}}
                      value={this.state.address}
                      />
                </div>
                <div className="input-container max-with-input">
                    <label>S??? ??i???n tho???i</label>
                    <input 
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "phonenumber")}}
                      value={this.state.phonenumber}
                      />
                </div>
            </div>
            
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => { this.handleSaveUser() }}
          >
            L??u thay ?????i
          </Button>{' '}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => { this.toggle() }}
          >
            Tho??t
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
