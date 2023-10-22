
const Cover = ({coverphoto, coverHeadile, coverDetails}) => {

    return (
        <div
            className="hero min-h-screen bg-fixed"
            style={{backgroundImage: `url(${coverphoto})`}}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{coverHeadile}</h1>
                    <p className="mb-5">
                      {coverDetails}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;
