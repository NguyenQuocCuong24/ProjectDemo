import React from 'react';
import banner1 from '../image/menu/banner-1.webp';
import banner2 from '../image/menu/banner-2.png';
import img1 from '../image/menu/img-service1.png';
import img2 from '../image/menu/img-service2.png';
import img3 from '../image/menu/img-service3.png';

import './content.css';


const Content = () => {
  return (
    <div>
      <section>
        <div className="banner-container">
          <img className="banner" src={banner1} alt="banner" />

          <div className="text-overlay">
            <h1>Đơn giản hóa Quản lí tài sản, tối đa</h1>
            <h2>Tăng trưởng bền vững</h2>
            <p>
              Dịch vụ Tư vấn đầu tư, Quản lý tài sản toàn diện và cá nhân hóa cho Nhà đầu tư
              nhằm phát triển tài sản bền vững và thịnh vượng.
            </p>
            <button> Liên hệ tư vấn ngay </button>
          </div>

          <div className="stats-overlay">
            <div className="stat">
              <h3>18 năm</h3>
              <p>Kinh nghiệm đầu tư và quản lý tài sản</p>
            </div>
            <div className="stat">
              <h3>10K+ tỷ đồng</h3>
              <p>Tổng tài sản quản lý</p>
            </div>
            <div className="stat">
              <h3>24.9%/năm</h3>
              <p>Hiệu suất đầu tư trung bình trong 10 năm</p>
            </div>
            <div className="stat">
              <h3>12+ năm</h3>
              <p>Số năm kinh nghiệm trung bình của đội ngũ quản lý tài sản</p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container-menu">
          <p className="heading">Vì sao lựa chọn</p>
          <p className="subheading">
            Tư vấn và Ủy thác quản lý tài sản cùng chúng tôi?
          </p>
          <div className="columns">
            <div className="column">
              <h3>Tối ưu Tăng trưởng bền vững</h3>
              <p>
                Dịch vụ đầu tư với mức tăng trưởng hàng đầu thị trường trong vòng hơn một thập kỷ vừa qua bằng việc lựa chọn phân bổ tài sản
                phù hợp vào các khoản đầu tư giá trị và tuân thủ nghiêm ngặt các nguyên tắc quản trị rủi ro.
              </p>
            </div>
            <div className="column">
              <h3>Đội ngũ Chuyên gia hàng đầu</h3>
              <p>
                Đội ngũ chuyên gia quản lý danh mục giàu kinh nghiệm, làm việc với chuẩn mực đạo đức cao,
                áp dụng quy trình đầu tư chuyên nghiệp và kiểm soát rủi ro chặt chẽ.
              </p>
            </div>
            <div className="column">
              <h3>Thông tin minh bạch, trực quan</h3>
              <p>
                Hệ thống báo cáo chuyên nghiệp, minh bạch, trực quan giúp Nhà đầu tư theo dõi và quản lý tài sản 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="banner-container-2">
          <img className="banner-2" src={banner2} alt="banner" />

          <div className="text-overlay-2">
            <h1>Triết lý đầu tư</h1> <br />

            <h1>
              Đem lại lợi nhuận bền vững và vượt trội cho Nhà đầu tư nhờ Chiến lược <br />
              phân bổ tài sản linh hoạt và khả năng Quản lý rủi ro hiệu quả
            </h1> <br />
            <button> Xem thêm  </button>
          </div>

        </div>
      </section>

      <section>
        <div className="container-menu-2">
          <p className="heading-2">Dịch vụ đầu tư</p>
          <p className="subheading-2">
            Chúng tôi cung cấp các lựa chọn đầu tư phù hợp với mục tiêu tài chính của riêng nhà đầu tư. Bạn sẽ luôn <br />
            an tâm với sự đồng hành của những chuyên gia kinh nghiệm và chính trực.
          </p>

          <div className="columns-2">
            <div className="column-2">
              <img className="banner-2" src={img1} alt="banner-2" />
              <div className="content">
                <h5>Uỷ thác Quản lý tài sản</h5>
                <p>
                  Tài sản của Nhà đầu tư được quản lý trực tiếp bởi
                  các chuyên gia Quản lý danh mục chuyên nghiệp và
                  giàu kinh nghiệm.
                </p>
                <hr />
                <a href="">Tìm hiểu thêm</a>
              </div>
            </div>
            <div className="column-2">
              <img className="banner-2" src={img2} alt="banner-2" />
              <div className="content">
                <h5>Tư vấn đầu tư</h5>
                <p>
                  Nhà đầu tư làm chủ quyết định đầu tư, dựa trên
                  những tư vấn
                  cụ thể của Đội ngũ chuyên gia tư vấn đầu tư.
                </p>
                <hr />
                <a href="">Tìm hiểu thêm</a>
              </div>
            </div>
            <div className="column-2">
              <img className="banner-2" src={img3} alt="banner-2" />
              <div className="content">
                <h5>Hỗ trợ giao dịch</h5>
                <p>
                  Nhà đầu tư giao dịch độc lập và riêng tư trên nền
                  tảng giao dịch thông minh, đa tiện ích.
                </p>
                <hr />
                <a href="">Tìm hiểu thêm</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="container-menu-2">
        <p className="heading-2">Liên hệ tư vấn</p>
        <p className="subheading-2">
          Nếu Quý nhà đầu tư có thắc mắc, xin vui lòng để lại thông tin.
          Đội ngũ chuyên gia của TVS và TVAM sẽ phản <br /> hồi trong thời gian sớm nhất.
        </p>

      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="form-container">
 
                <form action="">
                  <div className="input">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Tên của bạn" id="" name="" alt="" />
                    </div>

                    <div className="form-group">
                      <input className="form-control" type="email" placeholder="Địa chỉ email" id="" name="" alt="" />
                    </div>

                    <div className="form-group">
                      <input className="form-control" type="tel" placeholder="Số điện thoại" id="" name="" alt="" />
                    </div>
                  </div>

                  <div className="comment">
                    <textarea className="form-control" placeholder="Lời nhắn" id="" name="" alt=""></textarea>
                  </div>

                  <div>
                    <button name="btn-login" className="btn btn-primary"> Gửi yêu cầu </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Content;
