/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";



class Specialty extends Component {
  render() {
    
    return (
      <div className=" section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <img className="bg-image section-specialty" />
                <div className="bg-text">Cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-specialty2" />
                <div className="bg-text">Thần kinh</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-specialty3" />
                <div className="bg-text">Tiêu hóa</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-specialty4" />
                <div className="bg-text">Tim mạch</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-specialty5" />
                <div className="bg-text">Tai mũi họng</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-specialty6" />
                <div className="bg-text">Cột sống</div>
              </div>
            </Slider>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
