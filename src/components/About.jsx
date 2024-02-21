import Services from "../assets/figma/about/Services.jpg";
import Content from "../assets/figma/about/Content.png";
import Counter from "../assets/figma/about/Counter.png";

function About() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <img
          className="w-[873px] h-[311px] object-contain pt-6"
          src={Services}
          alt="services"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={Content} alt="container" />
        <img
          className="w-[1400px] h-[140px] object-contain pt-14"
          src={Counter}
          alt="content"
        />
      </div>
    </div>
  );
}
export default About;
