import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [aboutMe, ,] = useState();
  return (
    <div className="container mx-auto my-5">
      <footer>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <span className="font-bold text-primary">
              <Link to="/"><span className="text-tertiary">Dev</span>
          <span className="text-primary">M</span>
          <span className="text-tertiary">ech</span></Link>
            </span>{" "}
            Designed & Developed by Shohag. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://www.facebook.com/MH.Shohag.911"
              target="_blank"
              className="opacity-100 transition-opacity hover:opacity-70"
            >
              <FaFacebook className="text-2xl text-primary"></FaFacebook>
            </Typography>
            <Typography
              as="a"
              href="https://www.instagram.com/m_h_shohag"
              target="_blank"
              className="opacity-100 transition-opacity hover:opacity-70"
            >
              <FaInstagram className="text-2xl text-primary"></FaInstagram>
            </Typography>
            <Typography
              as="a"
              href="https://x.com/shohagmdhossain"
              target="_blank"
              className="opacity-100 transition-opacity hover:opacity-70"
            >
              <FaX className="text-2xl text-primary"></FaX>
            </Typography>
            <Typography
              as="a"
              href="https://github.com/MHShohag911"
              target="_blank"
              className="opacity-100 transition-opacity hover:opacity-70"
            >
              <FaGithub className="text-2xl text-primary"></FaGithub>
            </Typography>
            <Typography
              as="a"
              href="linkedin.com/in/md-shohag-hossain-827146275"
              target="_blank"
              className="opacity-100 transition-opacity hover:opacity-70"
            >
              <FaLinkedin className="text-2xl text-primary"></FaLinkedin>
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
