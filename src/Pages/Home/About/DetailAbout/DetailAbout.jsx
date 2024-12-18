import { MdOutlinePriceChange } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiRefund2Fill } from "react-icons/ri";
import { IoMdColorFill } from "react-icons/io";
import { GiPlantRoots } from "react-icons/gi";
import { Helmet } from "react-helmet";
import  { useEffect } from 'react';





import img from "../../../../assets/about.jpg";
import img0 from "../../../../assets/restaurant0.jpg";
import img1 from "../../../../assets/restaurant.jpg";
import img2 from "../../../../assets/signUpbg.jpg";
import img3 from "../../../../assets/restaurant1.jpg";
import img4 from "../../../../assets/image2.jpg";
import { TbChefHat } from "react-icons/tb";
import { Link } from "react-router-dom";
const DetailAbout = () => {
    useEffect(() => {
        const hash = window.location.hash;
        const targetId = hash.slice(1); // Remove the leading "#"
    
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, []);
   
    return (
        <div className="h-fit scroll-auto ">
             <Helmet>
                <title>Raw Relish Details About </title>
            </Helmet>
           
            
            <div className="h-[800px]  w-full flex items-center relative">
                <div  className="text-yellow-500  absolute top-1/3  space-y-5 p-10 z-10 border-2 border-l-0 border-yellow-500 bg-gradient-to-l from-lime-950 to-blue-950  ">
                    <h1 className="text-sm sm:text-md md:text-xl lg:text3xl text-yellow-600 font-semibold md:font-extrabold"> You need to know about ourself we always ready to give you information about us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quis labore laborum repellat vitae at pariatur earum? Tenetur, praesentium a.</p>
                </div>
                
                <div className="w-full h-full">
                <img className="opacity-70 w-full h-full rounded-3xl rounded-l-none" src={ img0 } alt="Restaurant Image" />
                </div>
                <div className="w-full h-full">
                <img className="opacity-70 w-full h-full py-10 rounded-3xl rounded-r-none" src={ img2 } alt="Restaurant Image" />

                </div>
                <div className="w-full h-full">
                <img className="opacity-70 w-full h-full rounded-3xl rounded-r-none" src={ img } alt="Restaurant Image" />

                </div>
            </div>

            <div className=" h-fit max-w-7xl mx-auto space-y-3  mb-24">
           <div className="sticky top-1/3 right-1/3 "> <Link className="btn btn-warning px-3 z-20 text-white" to="/about"> Back </Link></div>
                <div id="who" className="h-fit  lg:h-[600px] flex flex-col lg:flex-row gap-5  items-center pb-5 py-32">
                    <div className="w-full lg:w-1/2 h-full rounded-3xl">
                        <img className="h-full w-full px-12 lg:p-0 rounded-3xl" src={img2} alt="" />
                    </div>
                    <div className="lg:w-1/2 p-10 lg:p-5 space-y-5 text-justify lg:text-start ">
                        <h3 className="text-xl sm:text-2xl lg:text-5xl text-center lg:text-start  text-blue-400 font-bold ">Who we are </h3>
                        <h4 className="text-lg sm:text-xl lg:text-3xl  text-center lg:text-start text-blue-300 font-bold ">we are </h4>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque minima
                            commodi fuga quaerat aliquid quasi facere asperiores laborum, cum ratione earum hic nam? Ut
                            architecto maiores cupiditate eveniet repellat ipsum natus velit voluptatibus, eaque
                            similique voluptas atque necessitatibus, inventore obcaecati provident qui ratione labore
                            animi nisi explicabo fugit voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque dicta sunt. Tempora ducimus placeat ut quo, praesentium delectus porro ad tenetur cupiditate exercitationem nemo? Dolor, vitae doloremque nihil repellendus asperiores aut autem ipsum magni commodi modi voluptatibus? Itaque voluptate eligendi neque rerum repudiandae? Est neque debitis quod odit sapiente consequuntur, unde obcaecati fugiat similique hic impedit repellendus atque nobis, sed quia, commodi repudiandae officia sequi ab doloremque nam quas.
                        </p>
                    </div>
                </div>
                <div id="why" className="h-fit lg:h-[600px] flex flex-col-reverse lg:flex-row gap-5  items-center pb-5 py-32 ">
                  
                    <div className="lg:w-1/2  p-10 lg:p-5 space-y-5 text-justify lg:text-end ">
                        <h3 className="text-xl sm:text-2xl lg:text-5xl text-center lg:text-end  text-blue-400 font-bold ">Why from us </h3>
                        <h4 className="text-lg sm:text-xl lg:text-3xl text-center lg:text-end text-blue-300 font-bold ">We provide  </h4>
                        <p className="text-gray-400 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque minima
                            commodi fuga quaerat aliquid quasi facere asperiores laborum, cum ratione earum hic nam? Ut
                            architecto maiores cupiditate eveniet repellat ipsum natus velit voluptatibus, eaque
                            similique voluptas atque necessitatibus, inventore obcaecati provident qui ratione labore
                            animi nisi explicabo fugit voluptatum.
                        </p>
                        <div className=" h-fit w-full flex flex-col lg:flex-row">
                            <div className="h-full  w-full p-2 text-center border border-l-0 lg:border-t-0 border-r-8 border-yellow-400 ">
                                <h5 className="text-lg lg:text-xl font-semibold lg:font-bold text-blue-400 lg:text-sky-400">Refund</h5>
                                <div className="flex itmes-center justify-center gap-4 p-2">
                                <RiRefund2Fill className="h-10 w-10 text-yellow-400"/>
                                <h4 className="text-xl lg:text-2xl font-bold lg:font-extrabold text-yellow-500">Policy</h4>
                              </div>
                                <p className=" text-gray-400">If test wont expectable</p>
                            </div>
                            <div className="h-full  w-full p-2 text-center border lg:border-b-0 border-r-0 border-t-1 border-l-8 lg:border-r-8 lg:border-l-0 border-yellow-400 ">
                                <h5 className="text-lg lg:text-xl font-semibold lg:font-bold text-blue-400 lg:text-sky-500">Varius Items</h5>
                                <div className="flex items-center justify-center gap-4 p-2">
                                <IoFastFoodSharp className="h-10 w-10 text-yellow-400" />
                                <h4 className="text-xl lg:text-2xl font-bold lg:font-extrabold text-yellow-500">300 +</h4>
                                </div>
                                <p className=" text-gray-400">Traditional and trendy</p>
                            </div>
                            <div className="h-full  w-full p-2 text-center border border-l-0 border-t-0 border-r-8 lg:border-r-0 border-yellow-400 ">
                                <h5 className="text-lg lg:text-xl font-semibold lg:font-bold text-blue-400 lg:text-sky-400">Reasonable</h5>
                                <div className="flex items-center justify-center p-2 gap-4">
                                <MdOutlinePriceChange className="h-10 w-10  text-yellow-400" />
                                <h4 className="text-xl lg:text-2xl font-bold lg:font-extrabold text-yellow-500">Price </h4>
                               </div>
                            
                                <p className=" text-gray-400">No extra vat</p>
                            </div>
                      
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-full rounded-3xl ">
                        <img className="h-full w-full px-12 lg:p-0 rounded-3xl " src={img4} alt="" />
                    </div>
                </div>
                <div id="what" className="h-fit lg:h-[600px] flex flex-col lg:flex-row gap-5  items-center pb-5 py-32 ">
                    <div className="w-full lg:w-1/2 h-full">
                        <img className="h-full w-full px-12 lg:p-0 rounded-3xl" src={img3} alt="" />
                    </div>
                    <div className="lg:w-1/2 p-10 lg:p-5 space-y-5 text-justify lg:text-start ">
                        <h3 className="text-xl sm:text-2xl lg:text-5xl text-center lg:text-start  text-blue-400 font-bold ">What is our strength </h3>
                        <h4 className="text-lg sm:text-xl lg:text-3xl text-center lg:text-start text-blue-300 font-bold ">our strength is </h4>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque minima
                            commodi fuga quaerat aliquid quasi facere asperiores laborum, cum ratione earum hic nam? Ut
                            architecto maiores cupiditate eveniet repellat ipsum natus velit voluptatibus, eaque
                            similique voluptas atque necessitatibus, inventore obcaecati provident qui ratione labore
                            animi nisi explicabo fugit voluptatum.
                        </p>
                        <div className=" h-fit w-full flex flex-col lg:flex-row">
                            <div className="h-full  w-full p-2 text-center border border-l-0 lg:border-t-0 border-r-8 border-yellow-400 ">
                                <h5 className="text-lg lg:text-xl font-semibold lg:font-bold text-blue-400 lg:text-sky-400">Chemical</h5>
                                <div className="flex items-center justify-center gap-4 p-2">
                                <IoMdColorFill className="h-10 w-10 text-yellow-400"/>
                                <h4 className="text-xl lg:text-2xl font-bold lg:font-extrabold text-yellow-500">Free</h4>
                              </div>
                                <p className=" text-gray-400">maintaind</p>
                            </div>
                            <div className="h-full  w-full p-2 text-center border lg:border-b-0 border-r-0 border-t-1 border-l-8 lg:border-r-8 lg:border-l-0 border-yellow-400 ">
                                <h5 className="text-lg lg:text-xl font-semibold lg:font-bold text-blue-400 lg:text-sky-500">Experience Chef</h5>
                                <div className="flex items-center justify-center gap-4 p-2">
                                <TbChefHat className="h-10 w-10 text-yellow-400"/>
                                <h4 className="text-xl lg:text-2xl font-bold lg:font-extrabold text-yellow-500">15  Y+</h4>
                              </div>
                                <p className=" text-gray-400">From varius country</p>
                            </div>
                            <div className="h-full  w-full p-2 text-center border border-l-0 border-t-0 border-r-8 lg:border-r-0 border-yellow-400 ">
                                <h5 className="text-lg lg:text-xl font-semibold lg:font-bold text-blue-400 lg:text-sky-400">Safe Source</h5>
                                <div className="flex items-center justify-center gap-4 p-2">
                                <GiPlantRoots className="h-10 w-10 text-yellow-400"/>
                                <h4 className="text-xl lg:text-2xl font-bold lg:font-extrabold text-yellow-500">Root</h4>
                              </div>
                                <p className=" text-gray-400">Direct from farm / land</p>
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailAbout;
