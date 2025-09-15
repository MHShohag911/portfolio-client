import SectionTitle from "../SectionTitle/SectionTitle";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaCreativeCommonsRemix, FaDatabase, FaLaptopCode } from "react-icons/fa";
import { GiRobotGrab } from "react-icons/gi";
import { IoLogoDesignernews, IoLogoReact } from "react-icons/io5";
import { Md5G, MdDevices } from "react-icons/md";

const Service = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        heading={"What I Do for Clients"}
        subHeading={"Service"}
        description={
          "I provide solutions that combine Mechanical Engineering and Web Development. From CAD designs, robotics projects, to modern web applications, I deliver efficient and innovative results tailored to your needs."
        }
      ></SectionTitle>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
          <Card className="mt-6">
            <CardBody className="space-y-4">
              <div className="flex">
                <div className="flex flex-col justify-center mx-4">
                  <FaLaptopCode className="text-8xl text-[#F85023] mx-auto" />
                </div>
                <div>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Web Development
                  </Typography>
                  <Typography className="text-justify">
                    I create custom, responsive, and interactive websites that
                    not only look great but also provide seamless user
                    experiences. From front-end design to full-stack solutions,
                    I build platforms that bring your ideas to life and scale
                    with your growth.
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6">
            <CardBody className="space-y-4">
              <div className="flex">
                <div className="flex flex-col justify-center mx-4">
                  <MdDevices className="text-8xl text-[#8770EA] mx-auto" />
                </div>
                <div>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    App Development
                  </Typography>
                  <Typography className="text-justify">
                    I develop mobile and desktop applications tailored to your
                    unique requirements. Combining intuitive design with robust
                    functionality, my apps aim to simplify tasks, engage users,
                    and deliver a smooth digital experience.
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6">
            <CardBody className="space-y-4">
              <div className="flex">
                <div className="flex flex-col justify-center mx-4">
                  <IoLogoDesignernews className="text-8xl text-[#39B76B] mx-auto" />
                </div>
                <div>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Product Design
                  </Typography>
                  <Typography className="text-justify">
                    I provide industrial and mechanical design consulting,
                    turning innovative ideas into functional products. My
                    approach combines creativity, engineering expertise, and
                    practical problem-solving to deliver designs that truly
                    work.
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6">
            <CardBody className="space-y-4">
              <div className="flex">
                <div className="flex flex-col justify-center mx-4">
                  <Md5G className="text-8xl text-[#F85023] mx-auto" />
                </div>
                <div>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    IoT Solutions & Automation
                  </Typography>
                  <Typography className="text-justify">
                    I design and implement IoT and automation systems that
                    connect devices, sensors, and data to streamline processes
                    and improve efficiency. From smart home setups to industrial
                    monitoring systems, my solutions make technology work
                    seamlessly in the real world.
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6">
            <CardBody className="space-y-4">
              <div className="flex">
                <div className="flex flex-col justify-center mx-4">
                  <FaDatabase className="text-8xl text-[#8770EA] mx-auto" />
                </div>
                <div>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Data Visualization & Dashboard Development
                  </Typography>
                  <Typography className="text-justify">
                    I create interactive dashboards and data visualizations that
                    turn complex data into actionable insights. Using modern
                    tools and frameworks, I help you monitor, analyze, and
                    present data in a clear and engaging way.
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6">
            <CardBody className="space-y-4">
              <div className="flex">
                <div className="flex flex-col justify-center mx-4">
                  <GiRobotGrab className="text-8xl text-[#39B76B] mx-auto" />
                </div>
                <div>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Simulation & Modeling Services
                  </Typography>
                  <Typography className="text-justify">
                    I provide advanced simulation and modeling for mechanical
                    systems, including FEA, thermal and structural analysis, and
                    fluid dynamics. These simulations help optimize designs,
                    reduce errors, and ensure efficient, high-quality
                    engineering solutions.
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Service;
