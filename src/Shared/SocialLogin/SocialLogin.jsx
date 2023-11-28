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
            const loggedUser = result.user;
            console.log('from social login ',loggedUser );
            const saveUser = { name :loggedUser.displayName , email:loggedUser.email}

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
            console.log('error from handle to google signUp function',error);
        });

    };
    return (
        <div
            onClick={handleToGoogleSignUp}
            className="btn btn-outline btn-wide text-blue-500  border-2 border-blue-400 text-2xl p-2  "
        >
            <FaGoogle></FaGoogle>
        </div>
    );
};

export default SocialLogin;
