import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://raw-relish-server.vercel.app",
    // baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem("access-token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,

            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );
    }, [ logOut, navigate ]);
    // console.log("useAxiosSecure", axiosSecure);

    return [ axiosSecure ];
};

export default useAxiosSecure;
