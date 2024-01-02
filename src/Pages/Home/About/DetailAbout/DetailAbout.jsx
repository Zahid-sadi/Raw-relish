import img from "../../../../assets/abut.jpg";
import img2 from "../../../../assets/bg111.jpg";
import img3 from "../../../../assets/bg222.jpg";
import img4 from "../../../../assets/bg33.jpg";
const DetailAbout = () => {
    return (
        <div>
            <div  className="bg-gradient-to-t from-lime-950 via-blue-950 to-lime-950">
            <img style={{ borderRadius: " 0px 0px 900px 0px" }} className="  h-[700px] w-full" src={img} alt="" />
            </div>

            <div  className=" max-w-7xl mx-auto space-y-10 my-12">
                <div  className=" h-[550] flex flex-col lg:flex-row gap-5   justify-center items-center">
                    <div className="lg:w-1/2 h-full">
                        <img className="h-full w-full p-5" src={img2} alt="" />
                    </div>
                    <div className="lg:w-1/2 h-full p-5 space-y-2 text-center lg:text-start ">
                        <h3 className="text-xl sm:text-2xl lg:text-5xl  text-blue-400 font-bold ">Who we are </h3>
                        <h4 className="text-lg sm:text-xl lg:text-3xl  text-blue-300 font-bold ">we are </h4>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque minima
                            commodi fuga quaerat aliquid quasi facere asperiores laborum, cum ratione earum hic nam? Ut
                            architecto maiores cupiditate eveniet repellat ipsum natus velit voluptatibus, eaque
                            similique voluptas atque necessitatibus, inventore obcaecati provident qui ratione labore
                            animi nisi explicabo fugit voluptatum.
                        </p>
                    </div>
                </div>
                <div className=" h-[550]  flex flex-col lg:flex-row gap-5   justify-center items-center">
                  
                    <div className="lg:w-1/2 h-full p-5 space-y-2 text-center lg:text-end ">
                        <h3 className="text-xl sm:text-2xl lg:text-5xl  text-blue-400 font-bold ">
                            What is our strength{" "}
                        </h3>
                        <h4 className="text-lg sm:text-xl lg:text-3xl  text-blue-300 font-bold ">our strength </h4>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque minima
                            commodi fuga quaerat aliquid quasi facere asperiores laborum, cum ratione earum hic nam? Ut
                            architecto maiores cupiditate eveniet repellat ipsum natus velit voluptatibus, eaque
                            similique voluptas atque necessitatibus, inventore obcaecati provident qui ratione labore
                            animi nisi explicabo fugit voluptatum.
                        </p>
                    </div>
                    <div className="lg:w-1/2 h-full">
                        <img className="h-full w-full p-5" src={img3} alt="" />
                    </div>
                </div>
                <div className=" h-[550]  flex flex-col lg:flex-row gap-5   justify-center items-center">
                <div className="lg:w-1/2 h-full">
                        <img className="h-full w-full p-5" src={img4} alt="" />
                    </div>
                    <div className="lg:w-1/2 h-full p-5 space-y-2 text-center lg:text-start ">
                        <h3 className="text-xl sm:text-2xl lg:text-5xl  text-blue-400 font-bold ">Why form us </h3>
                        <h4 className="text-lg sm:text-xl lg:text-3xl  text-blue-300 font-bold ">because of </h4>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque minima
                            commodi fuga quaerat aliquid quasi facere asperiores laborum, cum ratione earum hic nam? Ut
                            architecto maiores cupiditate eveniet repellat ipsum natus velit voluptatibus, eaque
                            similique voluptas atque necessitatibus, inventore obcaecati provident qui ratione labore
                            animi nisi explicabo fugit voluptatum.
                        </p>
                    </div>

                  
                </div>
            </div>
        </div>
    );
};

export default DetailAbout;
