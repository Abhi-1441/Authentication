import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";

const PrivateRoute = () => {
    const userInfo = useSelector((state) => state.user.userInfo);
    // console.log(userInfo);

    useEffect(() => {
        if (!userInfo) {
            toast.error('User not found. Please log in.', {
                className: 'text-l',
            });
        }
    }, [userInfo]);

    return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
