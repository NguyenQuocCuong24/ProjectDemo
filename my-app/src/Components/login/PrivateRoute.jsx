import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Dùng useNavigate để điều hướng

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate(); // Dùng useNavigate để điều hướng

    useEffect(() => {
        const code = localStorage.getItem('code');
        if (code === 'VBNM') {
            setIsAuthenticated(true); // Nếu đã xác thực
        } else {
            navigate('/login'); // Điều hướng về trang login nếu không xác thực
        }
    }, [navigate]); 

    if (!isAuthenticated) {
        return null; 
    }

    return children; 
};

export default PrivateRoute;
