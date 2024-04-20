import loadingImg from "../../public/brand-logo.png";

const Loading = () => {
    return (
        <div  className="flex flex-col items-center justify-center h-screen">
            <div  className=" p-12 text-center ">
                <img className="h-28 animate-pulse" src={loadingImg} alt="" />
            </div>
                <progress className="progress mx-auto w-48 bg-yellow-600"></progress>
        </div>
    );
};

export default Loading;
