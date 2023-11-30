import loadingImg from "../../src/assets/logo3.png";

const Loading = () => {
    return (
        <div  className=" h-screen  ">
            <div  className=" p-96 animate-bounce delay-1000 duration-1000">
                <img className="h-28" src={loadingImg} alt="" />
                <p className=" font-bold -ml-5 text-yellow-500"> Raw..Relish.. loading..</p>
            </div>
        </div>
    );
};

export default Loading;
