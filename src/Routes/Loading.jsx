import loadingImg from "../../src/assets/logo3.png";

const Loading = () => {
    return (
        <div  className="flex items-center justify-center h-screen">
            <div  className=" p-12 text-center ">
                <img className="h-28 ml-14" src={loadingImg} alt="" />
                <progress className="progress w-56 bg-yellow-600"></progress>
                <p className=" font-bold mt-5 text-green-500"> Raw..Relish..loading...</p>
            </div>
        </div>
    );
};

export default Loading;
