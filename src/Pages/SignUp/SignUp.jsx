
import {Form, Link} from "react-router-dom";
import img from "../../assets/sigUpbg.jpg";
import { useContext,  useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';





const SignUp = () => {

    const {createUser, setLoading } = useContext(AuthContext)

   


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        // console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            setLoading(false)
            console.log(user);
        })
    };

  

    return (
        <div
            className="hero min-h-screen"
            // style={{backgroundImage: {img}}}
        >
            <img src={img} alt="" className="w-full h-screen" />

            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h4 className="text-white font-bold text-4xl p-4 m-2">Login</h4>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="my-2 lg:w-72 p-2  bg-transparent border-b-2 border-yellow-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className=" my-2 lg:w-72 p-2  bg-transparent border-b-2 border-yellow-400"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className=" my-2 p-2 lg:w-72 bg-transparent border-b-2 border-yellow-400 "
                            required
                        />
                     
                        <input
                            type="submit"
                            name="submit"
                            placeholder="submit"
                            className="my-2 btn btn-outline border-b-4 border-slate-900"
                            value="Login"
                        />
                    </form>
                    <Link className='text-yellow-400 font-light' to="/login">Already Have An Account</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
