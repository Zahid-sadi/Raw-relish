import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/sigUpbg.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
            const user = result.user;
            // console.log(user);

            updateUserProfile(name)
            .then(() => {

                const saveUser = { name : name , email: email}
                fetch("http://localhost:3000/users", {
                    method: 'POST',
                    headers: {
                        
                        'content-type':'application/json'
                    }, 
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log(data.insertedId);
                        toast.success('new user created')
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            });
                navigate("/")
            // console.log("profile updated");
        });
    };

    return (
        <div className="hero min-h-screen">
            <img src={img} alt="" className="w-full h-screen" />

            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h4 className="text-white font-bold text-4xl p-4 m-2">SignUp</h4>
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
                            value="SignUp"
                        />
                    </form>
                    <Link className="text-yellow-400 font-light" to="/login">
                        Already Have An Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
