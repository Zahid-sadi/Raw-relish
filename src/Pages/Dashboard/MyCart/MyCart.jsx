import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [ cart, refetch ] = useCart();
    // console.log({'myCart': cart });
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
    const parsePrice = parseFloat(totalPrice).toFixed(2);

    const handleToDelete = (item) => {
        // const proceed = window.confirm('its deleting')
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
                fetch(`http://localhost:3000/cart/${item._id}`, {
                    method: "DELETE",
                })
                .then((res) => {
                    if (!res) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }

                    return res.json();
                })
                .then((data) => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
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

    return (
        <div>
          

            <div className="w-full h-screen  p-5">
            <h4 className=" m-5 p-10 text-green-500 text-xl md:text-2xl lg:text-3xl     text-center font-bold capitalize">Your Cart </h4>
                <div className="flex  flex-col p-4 md:flex-row  justify-around content-center items-center bg-yellow-600 h-fit  text-lg md:text-2xl text-slate-700 font-bold ">
                    <h3>Total item {cart.length}</h3>
                    <h3>Total Price {parsePrice}</h3>
                    <Link to="/dashboard/payment">
                        <button className="btn-warning btn-sm rounded-lg m-2 hover:bg-yellow-300">Pay</button>
                    </Link>
                </div>

                <div className="overflow-x-auto bg-yellow-500">
                    <table className="table ">
                        <thead>
                            <tr className="text-lg  font-medium text-slate-700">
                                <th>Item no</th>
                                <th>Food</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {cart.map((dataRaw, index) => (
                                <tr key={dataRaw._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className=" avatar mask mask-squircle w-12 h-12">
                                            <img src={dataRaw.image} alt="Photo of ordered food" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{dataRaw.name}</div>
                                    </td>

                                    <td>
                                        <span className="badge badge-ghost badge-sm">{dataRaw.price}</span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleToDelete(dataRaw)}
                                            className="btn btn-md  text-red-500 hover:bg-black  hover:text-red-600"
                                        >
                                            <FaTrash></FaTrash>{" "}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
