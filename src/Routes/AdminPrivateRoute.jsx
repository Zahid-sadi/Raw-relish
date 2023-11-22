import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";



const AdminPrivateRoute = ({ children }) => {
    
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    
    if (loading || isAdminLoading) {
        return <div className=" bg-slate-900 h-full w-full text-center font-bold text-yellow-400 -mb-72">loading..............................</div>;
    }

    if (user && isAdmin) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    
};

export default AdminPrivateRoute;