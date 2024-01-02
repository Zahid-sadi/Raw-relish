import './About.css'
import aboutPhoto from "../../../assets/abut.jpg";
import { Link } from 'react-router-dom';
// import aboutPhoto1 from "../../../assets/curveBg.png";


const About = () => {
    return (
        <div className=" hero h-fit w-full overflow-hidden ">
            <img src={aboutPhoto} alt="" className="w-full h-full overflow-hidden" />
            <div className="hero-overlay bg-opacity-60  "></div>

            <div className="text-center text-neutral-content grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-content-center place-items-center gap-5 my-12 ">
                <div className="  custom-hov   border-2 border-yellow-600">
                <h4 className="text-4xl font-bold  p-24 bg-transparent ">WHO WE ARE </h4>
                    <p className="text-justify  p-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quibusdam voluptate atque adipisci minima debitis cum, quis, explicabo eligendi molestiae magnam earum maxime esse saepe quaerat tempore magni illo consequuntur, aliquam non voluptas at officiis labore? Assumenda deleniti temporibus, eum .
                        
                   <Link className='btn btn-sm btn-outline px-5 mx-3 text-yellow-400' to="/detail_about">More</Link>

                    </p>
                </div>
                <div className="custom-hov border-2 border-yellow-600">
                <h4 className="text-4xl text-center text- font-bold bg-transparent p-24">WHY FROM US </h4>

                    <p className=" text-justify p-5 ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique commodi et aliquam nemo, nulla blanditiis veritatis minima unde vitae rerum tenetur distinctio excepturi id consequuntur veniam nihil. Vel eveniet ea, soluta adipisci porro repudiandae numquam blanditiis ipsum. Quisquam aspernatur ut nobis dicta autem inventore, eius quasi accusantium qui esse eveniet?

                        <Link className='btn btn-sm btn-outline px-5 mx-3 text-yellow-400' to="/detail_about">More</Link>

                    </p>



                </div>
                <div className="custom-hov  border-2 border-yellow-600 ">
                    <h4 className="text-4xl -ml-7 font-bold text-center  bg-transparent p-24 ">OUR STRENGTH</h4> 
                  
                    <p className="text-justify font-sans p-5">
                        3.................. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit rerum
                        praesentium esse facere sint facilis soluta doloribus fugiat laborum, nobis maiores assumenda
                        laripsam dolore ex fuga labore necessitatibus nemo, reiciendis vitae. Reiciendis sapiente, cum
                        consequatur omnis distinctio modi facere pariatur recusandae incidunt cumque quas inventore
                        <Link className='btn btn-sm btn-outline px-5 mx-3 text-yellow-400' to="/detail_about">More</Link>

                    </p>

                </div>
            </div>
        </div>


      
    );
};

export default About;
