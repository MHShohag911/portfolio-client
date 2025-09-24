import { TbTargetArrow } from "react-icons/tb";
import team1 from "../../assets/img/team-01.jpg";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <div className="container mx-auto space-y-5 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-20 ">
        <Card className="mt-6">
          <CardBody className="space-y-4">
            <div>
              <TbTargetArrow className="text-6xl text-[#F85023] mx-auto" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Pixel Perfect
            </Typography>
            <Typography className="text-justify">
              I believe that great design is in the details. My work is
              pixel-perfect — every element is aligned, balanced, and polished
              to create seamless user experiences. I don’t just build things
              that work — I build things that look and feel right.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6">
          <CardBody className="space-y-4">
            <div>
              <PiPaintBrushBroadFill className="text-6xl text-[#39B76B] mx-auto" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              High Quality
            </Typography>
            <Typography className="text-justify">
              I’m committed to delivering high-quality design that is both
              visually compelling and functionally robust. From layout to
              typography, every detail is crafted with purpose. I focus on
              clean, responsive, and scalable design systems that enhance user
              experience and reflect the highest standards of visual and
              technical precision.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6">
          <CardBody className="space-y-4">
            <div>
              <FaLightbulb className="text-6xl text-yellow-500 mx-auto" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Awesome Idea
            </Typography>
            <Typography className="text-justify">
              I’m driven by the excitement of turning awesome ideas into real,
              working solutions. Whether it’s a unique design, a clever piece of
              code, or an engineering breakthrough, I love creating things that
              are not just cool — but also useful, efficient, and built with
              purpose.
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center ">
        <div className="w-full md:w-1/2">
          <div className="m-10 shadow-xl  mx-auto rounded-tr-[50%] rounded-bl-[50%]">
            <img
              className="w-full rounded-tr-[50%] rounded-bl-[50%] p-1 "
              src={team1}
              alt=""
            />
          </div>
        </div>
        <div className="w-full mx-auto md:w-1/2 flex flex-col md:flex-row items-center">
          <div className="p-5">
            <div className="space-y-3">
              <span className="text-2xl font-bold text-primary">I'm a </span>
              <h2 className="font-bold text-tertiary">
                Mechanical Engineer | Web Developer | Tech Enthusiast
              </h2>
              <p className="text-justify text-gray-600">
                I am a Mechanical Engineer with expertise in Mechatronics, and CAD, alongside modern web development skills in React, Node.js, and MongoDB. I enjoy creating innovative solutions, from intelligent systems to interactive web applications.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold flex items-center text-primary mt-5">
                <IoIosSchool className="text-2xl mr-2" />
                Education
              </h2>
              <h3 className="font-bold text-tertiary">
                B.Tech in Mechanical Engineering
              </h3>
              <span className="text-primary text-xs font-bold">Jain University, 2020-2024</span>
            </div>
            <div className="space-y-3">
              <p className="text-xl text-center text-quaternary mt-2 ">
                "<span className="">Engineering the Future</span>{" "}
                | <span className="">Coding the Web</span>"
              </p>
              <div className="text-center">
                <Link className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white mx-auto rounded-none bg px-3 py-2 " to={"/contact"}>Contact Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
