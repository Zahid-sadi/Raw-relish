import { FaPen, FaTrash } from "react-icons/fa";
import useItems from "../../../Hooks/useItems";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const ManageItem = () => {
    const [ menu, , refetch ] = useItems();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate()
    // console.log({axiosSecure});

    const handleToDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/items/${id}`)
                    .then((res) => {
                        console.log("response after delete request",res.data);
                    if (res.data.deletedCount > 0 ) {
                        refetch();

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };


    const handleToUpdate = (id) => {
        navigate(`/dashboard/update/item/${id}`)
        
    }

    return (
        <div className="w-full p-10 ">
            <h4 className="m-5 p-10 text-blue-400 text-3xl text-center font-bold capitalize">Manage your item </h4>
            <p className="text-blue-500 font-semibold my-2">Total items is <span className="text-yellow-300 font-bold text-lg">{menu.length}</span> </p>
            <div className="overflow-x-auto  bg-yellow-500">
                <table className="table">
                    
                    <thead className="bg-yellow-600 h-24 ">
                        <tr className="text-slate-900  text-lg font-bold ">
                            <th>Item No</th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr className="font-bold" key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className=" avatar mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="image of raw food menu" />
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td>
                                    <div className="dropdown dropdown-bottom ">
                                        <label tabIndex={0} className="btn bg-green-950 text-white hover:text-black font-bold">
                                            Click
                                        </label>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100  rounded-box w-full "
                                        >
                                            <li>
                                                <button
                                                    onClick={() => handleToDelete(item._id)}
                                                    className="btn btn-ghost btn-xs hover:bg-red-700 p-1 "
                                                >
                                                    <FaTrash></FaTrash>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => handleToUpdate(item._id)}
                                                    className="btn btn-ghost btn-xs hover:bg-blue-700 p-1 "
                                                >
                                                    <FaPen></FaPen>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;
