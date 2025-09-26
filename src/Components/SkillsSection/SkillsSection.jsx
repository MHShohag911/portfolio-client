import { Progress } from "@material-tailwind/react";

const SkillsSection = ({skills}) => {
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
            I believe in continuous learning and consistently enhance my skills
            in mechanical design, robotics, and web development. By combining
            technical expertise with adaptability, innovation, and
            collaboration, I strive to deliver creative solutions and add
            long-term value to every project.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mx-auto my-5 shadow-xl rounded-tl-[50%] rounded-br-[50%]">
            <img
              className="w-full rounded-tl-[50%] rounded-br-[50%] p-1 "
              src="https://i.ibb.co.com/KzDDZTP1/team-02.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        {skills.map((skill) => (
          <div key={skill._id} className="flex w-full flex-col gap-2 md:gap-4 ">
            <h2 className="text-xl font-bold text-primary">{skill.category}</h2>
            {skill.skills.map((val, idx) => (
              <Progress
                key={idx}
                className="[&>div]:bg-primary"
                value={val.value}
                size="sm"
                label={val.name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
