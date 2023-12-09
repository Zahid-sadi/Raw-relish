import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [ axiosSecure ] = useAxiosSecure();

    const { data: statistics = {} } = useQuery({
        queryKey: [ "admin-statistics" ],
        queryFn: async () => {
            const response = await axiosSecure("/admin-statistics");
            console.log(response.data);
            return response.data;
        },
    });
    return (
        <div className=" h-screen m-5 text-green-500">
            <h4 className="text-xl font-bold p-10 capitalize">hi dear {user.displayName}</h4>
            <div className="stats shadow w-full p-10">
                <div className="stat place-items-center">
                    <div className="stat-title">Customer</div>
                    <div className="stat-value text-secondary">{statistics.users}</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Items</div>
                    <div className="stat-value text-secondary">{statistics.estimatedItems}</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{statistics.revenue}</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Orders</div>
                    <div className="stat-value">{statistics.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
