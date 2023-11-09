import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: [ "users" ],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/users");
            return response.json();
        },
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
        
    };

    return (
        <div className="w-full p-10">
            <h3 className="font-bold text-3xl bg-yellow-500 text-back p-5 text-center">Total User: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
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
