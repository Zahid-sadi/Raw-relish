import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [ data, refetch ] = useCart();
    console.log(data);
    const totalPrice = data?.reduce((total, item) => total + item.price, 0);
    const roundPrice = Math.round(totalPrice).toFixed(2);

    const handleToDelete = (item) => {
        // const proceed = window.confirm('its deleting')
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
                fetch(`http://localhost:3000/cart/${item._id}`,{
                    method: 'DELETE'
                })
                    .then(res => {
                        if (!res) {
                            throw new Error(`HTTP error! Status: ${res.status}`);
                        }
                        
                       return res.json()
                    } 
                    )
                .then(data =>{
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                          });
                        refetch()
                       
                    }
                })
             
            }
          });
     
    }

    return (
        <div>
            <div className="flex justify-around ">
                <h3>toatl item {data.length}</h3>
                <h3>toatl price {roundPrice}</h3>
                <button className="btn-warning btn-sm rounded-lg">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((dataRaw, index) => (
                            <tr key={dataRaw._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={dataRaw.image} alt="Photo of ordered food" />
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{dataRaw.name}</div>
                                </td>

                                <td>
                                    <span className="badge badge-ghost badge-sm">{dataRaw.price}</span>
                                </td>
                                <td>
                                    <button onClick={()=> handleToDelete(dataRaw)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash> </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;