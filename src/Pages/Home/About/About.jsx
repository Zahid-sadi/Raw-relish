import './About.css'
import aboutpic from "../../../assets/about-pic1.jpg";
const About = () => {
    return (
        <div className=" hero h-max w-full">
            <img src={aboutpic} alt="" className="w-full h-full " />
            <div className="hero-overlay bg-opacity-70  "></div>

            <div className="text-center text-neutral-content grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-content-center place-items-center gap-5 ">
                <div className=" custom-hov  bg-slate-600 md:">
                <h4 className="text-5xl font-bold p-24  bg-black">WHO ARE WE.... </h4>
                    <p className="text-start font-serif p-5">
                        
                        1...... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni, modi itaque illum
                        quaerat voluptatum voluptatibus quam minus, impedit fugit deleniti? Nisi dignissimos excepturi
                        perspiciatis labore facere dolore explicabo mollitia saepe quaerat ducimus eligendi temporibus,
                        iure quis culpa eos expedita? Laudantium enim illo corrupti culpa laboriosam aliquam! Nemo ab
                        atque beatae est veniam corporis sequi blanditiis quasi voluptatibus eum voluptate iste, quos
                        odit, labore, repellat unde dolor doloribus quo itaque natus! Doloribus ab magni ex tempora,
                        provident illum mollitia quae. Error, reprehenderit. Debitis praesentium laborum eius
                        repudiandae? Ipsum neque et sed vel!
                    </p>
                </div>
                <div className="custom-hov  bg-black">
                <h4 className="text-5xl text-center font-bold bg-slate-500 p-24">WHY FROM US </h4>

                    <p className=" text-start font-serif p-5 ">
                        2..... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, aperiam? Eaque
                        consectetur officia impedit accusantium amet, ea, itaque placeat nesciunt harum doloremque
                        voluptates est facilis illo, facere consequuntur deleniti perferendis aliquam. Aperiam, dolorem
                        nesciunt incidunt nobis unde vitae eligendi repellendus consequuntur quae maiores sequi, earum
                        molestiae quod minus autem aspernatur, molestias animi. Blanditiis harum officiis eius modi unde
                        cupiditate architecto! Dolor tempore quo perspiciatis, pariatur dicta dolore. Nihil, ut. Magni
                        magnam, quidem omnis quas accunsamus.
                    </p>

                </div>
                <div className="custom-hov  bg-slate-500  ">
                    <h4 className="text-5xl font-bold  bg-slate-800 p-24 text-center ">WHAT IS OUR STRENGTH</h4> 
                  
                    <p className="text-start font-sans p-5">
                        3.................. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit rerum
                        praesentium esse facere sint facilis soluta doloribus fugiat laborum, nobis maiores assumenda
                        laripsam dolore ex fuga labore necessitatibus nemo, reiciendis vitae. Reiciendis sapiente, cum
                        consequatur omnis distinctio modi facere pariatur recusandae incidunt cumque quas inventore
                        quibusdam vitae? Incidunt nesciunt consectetur aperiam quibusdam ipsam dolores? Voluptatum, eum
                        sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis repellendus quaerat fugiat commodi harum cumque delenit.
                    </p>
                </div>
            </div>
        </div>


      
    );
};

export default About;
