
const Cover = ({coverPhoto, coverHeadline, coverDetails}) => {

    return (
        <div
            className="hero min-h-screen bg-fixed object-cover"
            style={{backgroundImage: `url(${coverPhoto})`}}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="p-5 text-5xl font-bold">__{coverHeadline}__</h1>
                    <p className="p-4">
                      {coverDetails}
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Cover;
