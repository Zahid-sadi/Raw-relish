import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Loading from "./Loading";



const AdminPrivateRoute = ({ children }) => {
    
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <Loading></Loading>;
    }

    if (user && isAdmin) {
        return children;
    } else {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>;
    }
    
};

export default AdminPrivateRoute;