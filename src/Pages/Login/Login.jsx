import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";

import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../assets/imagr of login page.jpg";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const [ isDisable, setDisable ] = useState(true);
    const { logIn } = useContext(AuthContext);

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
            toast.success("login successfully");
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
        <div className="hero h-screen">
            <img src={img} alt="" className="w-full h-screen " />

            <div className="hero-overlay bg-opacity-40"></div>

            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <form onSubmit={handleLogin} className="card-body w-96 rounded-3xl  bg-black bg-opacity-40">
                        <div className="mx-auto">
                            <SocialLogin></SocialLogin>
                        </div>

                        <h4 className="text-white font-bold text-4xl p-4 m-2">LOGIN</h4>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className=" p-2  bg-transparent border-b-2 border-yellow-400"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="p-2  bg-transparent border-b-2 border-yellow-400 "
                            required
                        />
                        <label className="label">
                            <Link to="" className="label-text-alt link link-hover text-blue-400">
                                Forgot password?
                            </Link>
                        </label>
                        <label>
                            <LoadCanvasTemplate className=" bg-transparent text-blue-400 " />
                        </label>
                        <input
                            onMouseOut={handleCaptcha}
                            type="text"
                            name="captcha"
                            placeholder="type here the captcha"
                            className="text-center p-2  bg-transparent border-b-2 border-yellow-400 "
                        />
                        <input
                            disabled={isDisable}
                            type="submit"
                            name="submit"
                            placeholder="submit"
                            className=" mt-4 btn btn-outline border-b-4 border-slate-900"
                            value="Login"
                        />
                        <Link
                            className="px-5 mt-5 bg-gradient-to-r from-yellow-400 to-orange-400  text-black "
                            to="/signUp"
                        >
                            Please Make An Account
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
