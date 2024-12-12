import "./About.css";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import aboutPhoto from "../../../assets/abut.jpg";
// import aboutPhoto1 from "../../../assets/curveBg.png";

const About = () => {
    return (
        <>
            <Helmet>
                <title>Raw Relish About </title>
            </Helmet>
            <div className=" hero h-fit w-full overflow-hidden scroll-smooth">
                <img src={aboutPhoto} alt="" className="w-full h-full overflow-hidden" />
                <div className="hero-overlay bg-opacity-60  "></div>

                <div className="w-screen  md:w-fit text-center text-neutral-content grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-content-center place-items-center gap-5 my-12 px-10">
                    <div className="detail-card  border-2 border-yellow-600">
                        <h1 className="text-4xl font-bold text-blue-300   bg-transparent px-12 py-24 ">
                            WHO WE ARE...{" "}
                        </h1>
                        <p className="text-justify  p-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quibusdam voluptate
                            atque adipisci minima debitis cum, quis, explicabo eligendi molestiae magnam earum maxime
                            esse saepe quaerat tempore magni illo consequuntur, aliquam non voluptas at officiis labore?
                            Assumenda deleniti temporibus, eum . Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam aut excepturi itaque impedit veritatis reprehenderit cum dolore, natus rerum fugit
                            culpa voluptatibus nesciunt vero assumenda nisi qui expedita perspiciatis. Et consequuntur
                            adipisci nemo sapiente eaque exercitationem explicabo in mollitia sed!
                        </p>
                        <Link
                            className="btn btn-sm btn-outline px-5 m-3 text-yellow-400 hover:bg-yellow-500 hover:text-white"
                            to="/detail_about#who"
                        >
                            More
                        </Link>
                    </div>
                    <div className="detail-card-auto  border-2 border-yellow-600 px-2">
                        <h1 className="text-4xl text-center  font-bold text-blue-300 bg-transparent px-12 py-24">
                            WHY FROM US
                        </h1>

                        <p className=" text-justify px-5 pt-20">
                            from us Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit rerum
                            praesentium esse facere sint facilis soluta doloribus fugiat laborum, nobis maiores
                            assumenda laripsam dolore ex fuga Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias, nemo. Lorem, ipsum dolor sit
                        </p>
                        <Link
                            className="btn btn-sm btn-outline px-5  text-yellow-400 hover:bg-yellow-500 hover:text-white m-3"
                            to="/detail_about#why"
                        >
                            More
                        </Link>
                    </div>
                    <div className="detail-card  border-2 border-yellow-600 ">
                        <h1 className="text-4xl text-center  font-bold text-blue-300 bg-transparent px-12 py-24 ">
                            WHAT IS OUR STRENGTH
                        </h1>

                        <p className="text-justify font-sans p-5">
                            our strength Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit rerum
                            praesentium esse facere sint facilis soluta doloribus fugiat laborum, nobis maiores
                            assumenda laripsam dolore ex fuga labore necessitatibus nemo, reiciendis vitae. Reiciendis
                            sapiente, cum consequatur omnis distinctio modi facere pariatur recusandae incidunt cumque
                            quas inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in delectus,
                            laborum eveniet voluptas quae omnis totam praesentium fuga eius cum nobis ea animi earum,
                            aliquam quo hic molestias quibusdam. Voluptatibus enim non dolor repudiandae maxime adipisci
                            tempora facilis accusamus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                            molestias earum unde laborum similique ipsa vitae recusandae assumenda cumque sed id nulla
                            fugiat, deleniti tempora! Rem dolor, voluptates temporibus adipisci ullam libero fugit
                            voluptatum sit repudiandae praesentium accusantium molestias iste?
                        </p>
                        <Link
                            className=" btn btn-sm btn-outline px-5  text-yellow-400 hover:bg-yellow-500 hover:text-white m-3"
                            to="/detail_about#what"
                        >
                            More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
