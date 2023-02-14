/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";



class HandBook extends Component {
  render() {
    
    return (
      <div className=" section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cẩm nang</span>
            <button className="btn-section">xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <img className="bg-image section-handbook" />
                <div className="bg-text">Cẩm nang bệnh viêm xoang</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-handbook2" />
                <div className="bg-text">Cẩm nang chăm sóc sức khỏe tại nhà</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-handbook3" />
                <div className="bg-text">Hiến tiểu cầu</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-handbook4" />
                <div className="bg-text">12 lầm tưởng về giấc ngủ</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-handbook5" />
                <div className="bg-text">Rối loạn Tic</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-handbook6" />
                <div className="bg-text">Tác hại thuốc lá điện tử</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
