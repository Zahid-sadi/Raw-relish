import { useNavigate, useParams } from "react-router";

import { ImSpoonKnife } from "react-icons/im";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UpdateItems = () => {
    const router = useParams();
    const { id } = router;
    // console.log('router',router);
    const [ item, setItem ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://raw-relish-server.vercel.app/items/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }, [ id ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const itemDetail = {
            name: form.name.value,
            category: form.price.value,
            price: form.price.value,
            recipe: form.recipe.value,
            image: form.image.value,
        };
        console.log("form", itemDetail);

        fetch(`https://raw-relish-server.vercel.app/items/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemDetail),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                navigate("/dashboard/manage/item");
                toast.success("item updated successfully");
            } else {
                // toast.err(data.error)
            }
        })
        .catch((err) => toast.error(err.message));
    };

    return (
        <div className="w-full px-10">
            <div className="flex content-center justify-center items-center mt-5">
                <div className="text-blue-400 text-center font-bold text-4xl p-4 ">
                    <h3>UPDATE OF</h3>
                    <h5>{item.name}</h5>
                </div>

                <img className=" h-36  rounded-2xl " src={item.image} alt="" />
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-bold text-yellow-600">Recipe Name*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={item.name}
                        placeholder="Recipe Name"
                        className="input input-bordered w-full "
                    />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-yellow-600">Category*</span>
                        </label>
                        <select defaultValue={item.category} name="category" className="select select-bordered">
                            <option disabled>Select Category</option>
                            <option>Raw</option>
                            <option>Offered</option>
                            <option>Juice</option>
                            <option>Grilled</option>
                            <option>Raw Fruits</option>
                            <option>FoodBread</option>
                            <option>honey</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label ">
                            <span className="label-text font-bold text-yellow-600">Price*</span>
                        </label>
                        <input
                            type="text"
                            name="price"
                            defaultValue={item.price}
                            placeholder="Number"
                            className="input input-bordered w-full "
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-bold text-yellow-600 ">Recipe Details</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        name="recipe"
                        defaultValue={item.recipe}
                        placeholder="Detail"
                    ></textarea>
                </div>
                <div className="flex">
                    <div className="form-control my-3 w-2/3">
                        <label className="label">
                            <span className="label-text font-bold text-yellow-600">Item Image*</span>
                        </label>
                        <input
                            type="file"
                            name="image"
                            placeholder="use image link"
                            className="file-input file-input-bordered mr-2 "
                        />
                    </div>
                    <div className="btn  text-green-900 font-bold mt-12 w-1/3">
                        <input className="text-lg font-extrabold " type="submit" value="Add" />
                        <ImSpoonKnife className="text-green-800  h-12 w-8"></ImSpoonKnife>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateItems;
