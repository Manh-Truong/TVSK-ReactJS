import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          address: '',
          phonenumber: ''
    }

    this.listenToEmitter();
  }

  listenToEmitter(){
    emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
      //reset state
      this.state ({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
      })
    })
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFormParent();
  };

  handleOnChangeInput = (event, id) => {
    // bad code.modify state
    //   this.state[id] = event.target.value
    //   this.setState({
    //     ...this.state
    // }, () => {
    //     console.log('check bad state: ', this.state)
    // })
    
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

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      //call api create modal
      this.props.createNewUser(this.state);
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
          Tạo một người dùng mới
        </ModalHeader>
        <ModalBody>
            <div className="modal-user-Body">
                <div className="input-container">
                    <label>Email</label>
                    <input 
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "email")}}
                      value={this.state.email}
                    />
                </div>
                <div className="input-container">
                    <label>Mật khẩu</label>
                    <input 
                      type="password" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "password")}}
                      value={this.state.password}
                      />
                </div>
                <div className="input-container">
                    <label>Tên</label>
                    <input 
                      autocomplete="off"
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "firstName")}}
                      value={this.state.firstName}
                    />
                </div>
                <div className="input-container">
                    <label>Họ tên</label>
                    <input 
                      autocomplete="off"
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "lastName")}} 
                      value={this.state.lastName}
                      />
                </div>
                <div className="input-container max-with-input">
                    <label>Địa chỉ</label>
                    <input 
                      autocomplete="off"
                      type="text" 
                      onChange={(event)=> {this.handleOnChangeInput(event, "address")}}
                      value={this.state.address}
                      />
                </div>
                <div className="input-container max-with-input">
                    <label>Số điện thoại</label>
                    <input 
                      autocomplete="off"
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
            onClick={() => { this.handleAddNewUser() }}
          >
            Thêm mới
          </Button>{' '}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => { this.toggle() }}
          >
            Thoát
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
