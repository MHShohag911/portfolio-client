import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto my-5">
      <footer>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <Link to="/">Thunder Triangle</Link>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://www.facebook.com/MH.Shohag.911"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaFacebook></FaFacebook>
            </Typography>
            <Typography
              as="a"
              href="https://www.instagram.com/m_h_shohag"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaInstagram></FaInstagram>
            </Typography>
            <Typography
              as="a"
              href="https://x.com/shohagmdhossain"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaX></FaX>
            </Typography>
            <Typography
              as="a"
              href="https://github.com/MHShohag911"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaGithub></FaGithub>
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
