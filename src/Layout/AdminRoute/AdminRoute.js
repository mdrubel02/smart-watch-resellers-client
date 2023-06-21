import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/User/UserContext';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import Loading from '../../Pages/Loading/Loading';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin === "admin") {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;