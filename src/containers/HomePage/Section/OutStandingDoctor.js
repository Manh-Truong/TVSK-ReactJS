/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className=" section-share section-outstanding-doctor">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                    <button className="btn-section">xem thêm</button>
                </div>
                <div div className="section-body">
                    <Slider {...this.props.settings}>
                        <div className="section-customize">
                            <div className='cusomize-border'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Khám Hiếm muộn - Hỗ trợ sinh sản, Bệnh viện Nam học và Hiếm muộn Hà Nội</div>
                                    <div>Vô sinh - Hiếm muộn </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className='cusomize-border'>
                                <div className='outer-bg'>
                                        <img className="bg-image section-outstanding-doctor2" />
                                    </div>

                                    <div className='position text-center'>
                                        <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp 
                                            <br></br>
                                            Nguyễn Duy Hưng
                                        </div>
                                        <div>Da liễu</div>
                                    </div>
                                </div>
                        </div>

                        <div className="section-customize">
                            <div className='cusomize-border'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor3" />
                                </div>

                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ 
                                        <br></br>Phạm Văn Tần
                                    </div>
                                    <div>Chuyên khoa Mắt</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className='cusomize-border'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor4" />
                                </div>
                                <div className='position text-center'>
                                    <div>PGS, TS, Giảng viên cao cấp 
                                        <br></br>
                                        Trần Hữu Bình
                                    </div>
                                    <div>Sức khỏe tâm thần</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-customize">
                            <div className='cusomize-border'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor5" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ<br></br> Nguyễn Thị Hoài An</div>
                                    <div>Tai Mũi Họng - Nhi khoa</div>
                                </div>
                            </div>
                        </div>
                        <div className="section-customize">
                            <div className='cusomize-border'>
                            <div className='outer-bg'>
                                <img className="bg-image section-outstanding-doctor6" />
                            </div>
                            <div className='position text-center'>
                                <div>Bác sĩ Chuyên khoa II <br></br> Trần Minh Khuyên </div>
                                <div>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</div>
                            </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
