import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="w-full m-5 text-green-500">
            <h4>hi dear {user.displayName}</h4>
        </div>
    );
};

export default UserHome;