import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate từ react-router-dom
import './login.css';

const Login = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Dùng useNavigate để điều hướng

    const handleLogin = () => {
        if (code === 'VBNM') {
            // Lưu trạng thái đăng nhập vào localStorage
            localStorage.setItem('code', 'VBNM');
            console.log("Đăng nhập thành công, điều hướng đến Dashboard");
            navigate('/dashboard'); // Điều hướng đến dashboard sau khi đăng nhập thành công
        } else {
            setError('Bạn đã nhập sai mã, vui lòng thử lại.');
        }
    };

    return (
        <div className="login-container">
            <h1>Đăng nhập</h1>
            <input
                type="text"
                placeholder="Nhập mã đăng nhập..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">
                Đăng nhập
            </button>
            {error && <p className="login-error">{error}</p>} {/* Hiển thị lỗi nếu có */}
        </div>
    );
};

export default Login;
