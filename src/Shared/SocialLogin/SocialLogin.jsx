import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || "/";

    const handleToGoogleSignUp = () => {
        googleLogin()
        .then((result) => {
            const logedUser = result.user;
            console.log(logedUser);
            const saveUser = { name :logedUser.displayName , email:logedUser.email}

            fetch("http://localhost:3000/users", {
                method: 'POST',
                headers: {
                    
                    'content-type':'application/json'
                }, 
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(data => {


                    navigate(from, { replace: true });
                }


                
            )
        })
        .catch((error) => {
            console.log(error);
        });

    };
    return (
        <div
            onClick={handleToGoogleSignUp}
            className="btn btn-outline btn-wide  border-2 border-blue-400 text-2xl p-2 m-2 "
        >
            <FaGoogle></FaGoogle>
        </div>
    );
};

export default SocialLogin;
