/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    
    return (
      <div className="home-footer">
            <p>&copy; 2023 Mạnh Trương. Thông tin chi tiết liên hệ qua Mạnh Trương.
                <a target="_blank" href="https://www.facebook.com/manh.truonghuy.7">  
                    &#8594; Click here &#8592;
                </a>
            </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
