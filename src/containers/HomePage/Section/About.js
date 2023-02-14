/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    
    return (
      <div className=" section-share section-about">
            <div className="section-about-header">
                Truyền thông nói về Channel MT
            </div>
            <div className="section-about-content">
                <div className="content-left">
                <iframe width="100%" height="400" 
                    src="https://www.youtube.com/embed/yVmUU-93Ams" 
                    title="Excision Live @ Lost Lands 12s" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                </div>
                <div className="content-right">
                    <p>
                        " Lợi ích từ trứng. Cung cấp đầy đủ năng lượng. Có rất nhiều lý do để bạn chọn ăn trứng mỗi ngày nhất là vào bữa sáng. Bởi vì, trứng có khả năng chống đói tốt hơn so với bánh mì, 
                        bánh bao, ngũ cốc. Protein và chất béo có trong trứng có thể cung cấp năng lượng ổn định cho bạn, 
                        khiến bạn có cảm giác no lâu hơn.Chỉ cần chắc chắn mỗi ngày ăn 1 quả bạn không lo tăng nguy cơ bệnh tim..."
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
