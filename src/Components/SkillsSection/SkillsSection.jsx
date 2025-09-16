import { Progress } from "@material-tailwind/react";
import team2 from "../../assets/img/team-02.jpg";

const SkillsSection = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row my-5 md:my-20">
        <div className="w-full md:w-1/2 space-y-3 md:p-5 flex flex-col justify-center">
          <h4 className="text-xl md:text-2xl text-[#F85023] font-bold">
            Design is life
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold">
            I Develop Skills Regularly to keep Me Updated
          </h2>
          <p className="text-justify text-gray-600">
            “I believe in continuous learning and have made it a cornerstone of my personal and professional journey. I consistently work on enhancing my skills in mechanical design, robotics, and modern web development, exploring both theoretical knowledge and practical applications. This constant growth mindset allows me to stay updated with the latest tools, technologies, and industry practices, while also strengthening my ability to approach challenges with creativity and efficiency. Over the years, I have realized that learning is not just about upgrading technical expertise but also about developing adaptability, innovation, and collaboration. By combining these qualities, I strive to contribute meaningful solutions, introduce fresh perspectives, and add long-term value to every project I take on.”
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mx-auto my-5 shadow-xl rounded-tl-[50%] rounded-br-[50%]">
            <img
              className="w-full rounded-tl-[50%] rounded-br-[50%] p-1 "
              src={team2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex w-full flex-col gap-2 md:gap-4 ">
          <h2 className="text-xl font-bold text-[#F85023]">
            Mechanical/Technical Skills:
          </h2>
          <Progress
              className="[&>div]:bg-[#8770EA] "
            
            value={85}
            size="sm"
            label="SolidWorks"
          />
          <Progress
              className="[&>div]:bg-[#8770EA] "
            
            value={80}
            size="sm"
            label="Ansys"
          />
          <Progress
              className="[&>div]:bg-[#8770EA] "
            
            value={85}
            size="sm"
            label="Matlab"
          />
          <Progress
              className="[&>div]:bg-[#8770EA] "
            value={75}
            
            size="sm"
            label="Arduino & Automation"
          />
          <Progress
              className="[&>div]:bg-[#8770EA] "
            
            value={75}
            size="sm"
            label="Ansys"
          />
          <Progress
              className="[&>div]:bg-[#8770EA]"
            
            value={85}
            size="sm"
            label="Matlab"
          />
        </div>
        <div className="flex w-full flex-col gap-2 md:gap-4">
          <h2 className="text-xl font-bold text-[#F85023]">
            Web Development/Coding Skills:{" "}
          </h2>
          <Progress
              className="[&>div]:bg-[#8770EA] "
            value={85}
            
            size="sm"
            label="React"
          />
          <Progress
              className="[&>div]:bg-[#8770EA] "
            
            value={80}
            size="sm"
            label="Node.js/Express"
          />
          <Progress
              className="[&>div]:bg-[#8770EA] "
            
            value={85}
            size="sm"
            label="MongoDB"
          />
          <Progress
              className="[&>div]:bg-[#8770EA]"
            value={80}
            size="sm"
            label="HTML/CSS/JS/Python"
          />
          <Progress
              className="[&>div]:bg-[#8770EA] "
            
            value={80}
            size="sm"
            label="Tailwind/MUI/DaisyUI"
          />
          <Progress
              className="[&>div]:bg-[#8770EA]"
            
            value={85}
            size="sm"
            label="REST API"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
