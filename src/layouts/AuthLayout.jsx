import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            authlayout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
