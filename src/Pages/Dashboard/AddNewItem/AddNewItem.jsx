import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const imgHostingKey = import.meta.env.VITE_imageId;

const AddNewItem = () => {
    const [ axiosSecure ] = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(imgHostingUrl, {
            method: "POST",
            body: formData,
        })
        .then((res) => res.json())
        .then((imgData) => {
            if (imgData.success) {
                const imgURL = imgData.data.display_url;
                const { name, category, recipe, price } = data;
                const newlyAddedItem = { name, image: imgURL, price: parseFloat(price), category, recipe };
                axiosSecure.post("/items", newlyAddedItem).then((data) => {
                    if (data.data.insertedId) {
                        // Toast()
                    }
                });
            }
        });
    };

    return (
        <div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 100 })}
                        className="input input-bordered w-full "
                    />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Category*</span>
                        </label>
                        <select
                            defaultValue="Select One"
                            {...register("category", { required: true })}
                            className="select select-bordered"
                        >
                            <option disabled>Select Category</option>
                            <option>Raw</option>
                            <option>Offered</option>
                            <option>Juice</option>
                            <option>Grilled</option>
                            <option>Fruits</option>
                            <option>FoodBread</option>
                            <option>With Honey</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label ">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input
                            type="Number"
                            {...register("price", { required: true })}
                            placeholder="Number"
                            className="input input-bordered w-full "
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-bold ">Recipe Details</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Bio"
                    ></textarea>
                </div>
                <div className="flex">
                <div className="form-control my-3 w-2/3">
                    <label className="label">
                        <span className="label-text font-bold">Item Image*</span>
                    </label>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered mr-2 "
                    />
                </div>
                    <input className="btn   mt-12 w-1/3" type="submit" value="Add Item" />
               </div>
            </form>
        </div>
    );
};

export default AddNewItem;
