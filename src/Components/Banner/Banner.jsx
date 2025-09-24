import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import devImg from "../../assets/img/dev-image-1.png";
import { Button, Typography } from "@material-tailwind/react";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <div className="bg-banner-image-3 bg-cover bg-center lg:-mt-20">
      <div className="w-full h-full bg-black/50 py-20">
        <figure className="h-full w-full pt-10">
          <div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-between rounded-xl bg-white/50 p-5 md:py-16 md:px-10 shadow-lg shadow-black/5 saturate-150 backdrop-blur-sm">
            <div className="h-full w-auto md:w-1/2 md:flex mr-5">
              <figcaption className="w- mx-auto lg:p-5 p-0">
                <div className="">
                  <div>
                    <Typography className="text-primary text-3xl font-bold">
                      Hello, I'm
                    </Typography>
                    <Typography
                      color="black"
                      className="mt-2 font-bold text-tertiary text-4xl md:text-3xl"
                    >
                      Md Shohag Hossain
                    </Typography>
                    <Typography
                      color="gray"
                      className="md:text-xxl text-secondary border-t-2 border-primary inline-block"
                    >
                      Engineer by Trade, Developer by Passion
                    </Typography>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex gap-4 text-blue-gray-900 ">
                    <Typography
                      as="a"
                      href="https://www.facebook.com/MH.Shohag.911"
                      target="_blank"
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <FaFacebook className="text-2xl text-[#0866FF]"></FaFacebook>
                    </Typography>
                    <Typography
                      as="a"
                      href="https://www.instagram.com/m_h_shohag"
                      target="_blank"
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <FaInstagram className="text-2xl text-white rounded bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"></FaInstagram>
                    </Typography>
                    <Typography
                      as="a"
                      href="https://x.com/shohagmdhossain"
                      target="_blank"
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <FaX className="text-2xl text-white bg-black rounded"></FaX>
                    </Typography>
                    <Typography
                      as="a"
                      href="https://github.com/MHShohag911"
                      target="_blank"
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <FaGithub className="text-2xl text-black"></FaGithub>
                    </Typography>
                    <Typography
                      as="a"
                      href="https://linkedin.com/in/md-shohag-hossain-827146275"
                      target="_blank"
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <FaLinkedin className="text-2xl text-blue-600"></FaLinkedin>
                    </Typography>
                  </div>
                </div>
                <Link className="border-2 px-4 py-2 font-normal border-primary bg-transparent text-primary rounded-none hover:bg-primary hover:shadow-xl hover:text-white mr-2" to={"/about"}>About</Link>
                <a href="/CV.pdf" download="Md_Shohag_Hossain_CV.pdf" className="border-2 px-4 py-2 font-normal border-primary bg-transparent text-primary rounded-none hover:bg-primary hover:shadow-xl hover:text-white" >Download CV</a>
              </figcaption>
            </div>
            <div className="md:w-1/2 h-full flex flex-col justify-center">
              <div className="w-full mx-auto p- my-5 bg-transparent border-transparent s">
                <img
                  src={devImg}
                  className="mx-auto w-full  object-cover object-center "
                  alt=""
                />
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Banner;
