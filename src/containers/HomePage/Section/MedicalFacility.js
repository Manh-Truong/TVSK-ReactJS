/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {

        return (
            <div className=" section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <img className="bg-image section-medical-facility" />
                <div className="bg-text">Hệ thống y tế Thu Cúc 1</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-medical-facility2" />
                <div className="bg-text">Bệnh viện Hữu Nghị Việt Đức</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-medical-facility3" />
                <div className="bg-text">Bệnh viện Chợ Rẫy</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-medical-facility4" />
                <div className="bg-text">Phòng khám Bệnh viện Đại học Y Dược 1</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-medical-facility5" />
                <div className="bg-text">Hệ thống y tế MEDLATEC</div>
              </div>
              <div className="section-customize">
                <img className="bg-image section-medical-facility6" />
                <div className="bg-text">Trung tâm xét nghiệm Diag Laboratories</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
