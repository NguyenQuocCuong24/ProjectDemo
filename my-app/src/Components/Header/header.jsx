import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/header/logo_tvs.webp';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className="container-fluid py-6">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <Link to="/">
                            <img
                                src={logo}
                                className="img-fluid"
                                alt="Logo"
                                style={{ width: '250px', height: '60px' }}
                            />
                        </Link>
                    </div>

                    <div className="col-md-7">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-2 fs-5 px-2 nav-item">
                                <div className="dropdown">
                                    <Link to="/" className="dropdown-toggle" style={{ color: 'black', textDecoration: 'none' }}>Về chúng tôi</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/history-development">Lịch sử và phát triển</Link></li>
                                        <li><Link to="/research/trends">Đội ngũ đầu tư</Link></li>
                                        <li><Link to="/research/trends">Triết lí đầu tư</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3 fs-5 px-2 nav-item">
                                <div className="dropdown">
                                    <Link to="/" className="dropdown-toggle" style={{ color: 'black', textDecoration: 'none' }}>Dịch vụ đầu tư</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/research/market">Ủy thác Quản lí tài sản </Link></li>
                                        <li><Link to="/research/trends">Tư vấn đầu tư</Link></li>
                                        <li><Link to="/research/trends">Hỗ trợ giao dịch </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 fs-5 px-2 nav-item">
                                <div className="dropdown">
                                    <Link to="/" className="dropdown-toggle" style={{ color: 'black', textDecoration: 'none' }}>Nghiên cứu & phân tích</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/research/market">Bảng giá</Link></li>
                                        <li><Link to="/research/trends">Nhịp đập thị trường </Link></li>
                                        <li><Link to="/research/trends">Phân tích doanh nghiệp</Link></li>
                                        <li><Link to="/research/trends">Tin tức</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">

                                <button className="btn-light px-5 py-3 rounded border border-secondary">
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
