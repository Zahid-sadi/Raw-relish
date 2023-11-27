import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: [ "users" ],
        queryFn: async () => {
            const response = await axiosSecure.get("/users");
            return response.data;

        }
    });

    const handleToMakeAdmin = user => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
             method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modification) {
                    refetch()
            }
        })
        
    }

    const handleToDelete = (user) => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('an admin deleted')
            }
        })
        
    };

    return (
        <div className="w-full p-10">
            <h3 className="font-bold text-black text-3xl bg-yellow-500 text-back p-5 text-center  capitalize  ">TOTAL USER : {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className="text-blue-400 font-bold text-lg" >
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === "admin" ? (
                                        "admin"
                                    ) : (
                                        <button onClick={()=>handleToMakeAdmin(user)}>
                                            <GrUserAdmin></GrUserAdmin>
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleToDelete(user)}>
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
