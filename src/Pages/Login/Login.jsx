import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import {Form, Link} from "react-router-dom";
import img from "../../assets/loginbg2.jpg";
import { useEffect, useState } from 'react';
const Login = () => {

    const [isDisable, setDisable] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    const handleCaptcha = event =>{
        event.preventDefault()
        const user_captcha_value = event.target.value;
        // console.log(user_captcha_value);
        if(validateCaptcha(user_captcha_value)== true){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

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
                        className="p-2 lg:w-72 bg-transparent border-b-2 border-yellow-400 "

                         />
                        <input
                            disabled={ isDisable }
                            type="submit"
                            name="submit"
                            placeholder="submit"
                            className="btn btn-outline border-b-4 border-slate-900"
                            value="Login"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
