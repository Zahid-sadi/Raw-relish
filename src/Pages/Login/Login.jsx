import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/loginbg2.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const [ isDisable, setDisable ] = useState(true);
    const {  logIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logIn(email, password).then((result) => {
            const user = result.user;

            // console.log(user);
            navigate(from, { replace: true });
        });
    };

    const handleCaptcha = (event) => {
        event.preventDefault();
        const user_captcha_value = event.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    return (
        <div
            className="hero min-h-screen"
            // style={{backgroundImage: {img}}}
        >
            <img src={img} alt="" className="w-full h-full " />

            <div className="hero-overlay bg-opacity-40"></div>

            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <form onSubmit={handleLogin} className="card-body">
                        <SocialLogin></SocialLogin>

                        <h4 className="text-white font-bold text-4xl p-4 m-2">Login</h4>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="lg:w-72 p-2  bg-transparent border-b-2 border-yellow-400"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="p-2 lg:w-72 bg-transparent border-b-2 border-yellow-400 "
                            required
                        />
                        <label className="label">
                            <Link to="" className="label-text-alt link link-hover text-blue-400">
                                Forgot password?
                            </Link>
                        </label>
                        <label>
                            <LoadCanvasTemplate />
                        </label>
                        <input
                            onMouseOut={handleCaptcha}
                            type="text"
                            name="captcha"
                            placeholder="type here the captcha"
                            className="text-center p-2 lg:w-72 bg-transparent border-b-2 border-yellow-400 "
                        />
                        <input
                            disabled={isDisable}
                            type="submit"
                            name="submit"
                            placeholder="submit"
                            className="btn btn-outline border-b-4 border-slate-900"
                            value="Login"
                        />
                    </form>
                    <Link className="px-5 bg-gradient-to-r from-yellow-400 to-orange-400  text-black " to="/signUp">
                        Please Make An Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
