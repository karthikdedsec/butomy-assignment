import project from "../assets/figma/project/Project.jpg";
import testimoni from "../assets/figma/project/Testimonial.png";
import title from "../assets/figma/project/Title.png";
import one from "../assets/figma/project/1.png";
import two from "../assets/figma/project/2.png";

function Project() {
  return (
    <div className=" sm:mt-20">
      <div>
        <img src={project} alt="project" />
      </div>
      <div className="flex flex-col justify-center items-center sm:p-20">
        <div className="p-3 mt-4">
          <img src={title} alt="" />
        </div>
        <div className="p-3 md:flex">
          <div>
            <img src={one} alt="one" />
          </div>
          <div>
            <img src={two} alt="two" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
