import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import AboutSectionTitle from "../../Components/AboutSectionTitle";
import useAboutMe from "../../hooks/useAboutMe";
import { VscSettingsGear } from "react-icons/vsc";
import { TbDeviceVisionProFilled } from "react-icons/tb";

const About = () => {
  const [aboutMe, , refetch] = useAboutMe();
  const { name, profilePicture, title, about, contact } = aboutMe[0] || {};
  console.log(aboutMe[0]);
  return (
    <div className="text-gray-600 space-y-10 lg:-mt-20 -z-10">
      <AboutBanner myImage={aboutMe[0]?.profilePicture}></AboutBanner>
      <div className="container mx-auto p-5">
        <h2 className="text-3xl text-center text-primary font-bold mb-10">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full text-center">
            <img
              className="w-80 h-80 mx-auto rounded-br-[50%] rounded-tl-[50%]"
              src={profilePicture}
              alt=""
            />
          </div>
          <div className="w-full">
            <h2 className="text-3xl font-bold text-primary ">Hi, I’m </h2>
            <h2 className="text-xl font-bold text-secondary  ">
              Md Shohag Hossain
            </h2>
            <h2 className="font-bold text-tertiary">{title}</h2>
            <p className="text-justify ">
              I am a Mechanical Engineer specialized in Mechatronics, with a
              strong interest in Robotics and Artificial Intelligence. Alongside
              my engineering background, I also work as a Frontend Developer,
              building modern and responsive web applications.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <AboutSectionTitle heading={`What I Do`}></AboutSectionTitle>
            <p className="flex justify-center">
              <VscSettingsGear className="text-2xl text-tertiary my-3 " />
            </p>
            <p className="text-justify">
              Design and model mechanical systems using SolidWorks with a
              specialization in Mechatronics. Build modern and responsive web
              applications using React, Tailwind, and MongoDB. Develop
              innovative projects that integrate Robotics, AI, and IoT
              technologies.
            </p>
          </div>
          <div>
            <AboutSectionTitle heading={"My Vision"}></AboutSectionTitle>
            <p className="flex justify-center">
              <TbDeviceVisionProFilled className="text-2xl text-tertiary my-3 " />
            </p>
            <p className="text-justify">
              I believe in combining engineering and intelligence to create
              solutions that can make everyday life smarter and more efficient.
              My long-term goal is to pursue higher studies in Robotics and
              contribute to research in multi-robot systems, AI integration, and
              traffic flow optimization.
            </p>
          </div>
        </div>
        <div>
          <AboutSectionTitle heading={"Skills"}></AboutSectionTitle>
          <div className="grid grid-cols-2 gap-5">
            {about?.skills &&
              Object.entries(about.skills).map(([key, value]) => (
                <div key={key}>
                  <h2 className="text font-bold uppercase text-secondary my-2">
                    {key.slice(0, 16)}
                  </h2>
                  <div>
                    <ul>
                      {value.map((skill, idx) => (
                        <li key={idx}>
                          <span className="font-bold text-primary ">
                            {idx + 1}.{" "}
                          </span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <AboutSectionTitle heading={"Education"}></AboutSectionTitle>
          {about?.education?.degrees.map((degree, idx) => (
            <div key={idx} className="my-5">
              <div className="">
                <p className="flex gap-2 items-center">
                  <FaGraduationCap className="text-2xl text-tertiary" />
                  {degree.degree}
                </p>
                <div className="flex gap-2 ">
                  <p className="flex gap-2 items-center">
                    <FaUniversity className="text-2xl text-tertiary" />
                    {degree.university}
                  </p>
                  <p>{degree.graduationYear}</p>
                </div>
              </div>
            </div>
          ))}
          <div>
            <h2 className="text font-bold text-secondary my-2">
              Final Year Projects
            </h2>
            <p>
              Development of Smart Garage – RFID-based system with camera
              integration and email notifications for automated vehicle
              entry/exit monitoring.
            </p>
            <h2 className="text font-bold text-secondary my-2">
              Research Interest
            </h2>
            <div>
              <ul>
                {about?.researchInterest.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <AboutSectionTitle heading={"Beyond Work"}></AboutSectionTitle>
          <p className="text-justify">
            Outside of my professional interests, I enjoy traveling, which helps
            me gain new perspectives and fresh ideas. I also dedicate time to
            reading—both books and articles on emerging technologies—to stay
            current with industry trends. Additionally, I place strong focus on
            developing and learning new skills, as continuous growth and
            knowledge expansion are essential to both my personal and
            professional journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
