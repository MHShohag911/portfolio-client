import myPhoto2 from "../../assets/img/My Photo 2.jpg";
import { Typography } from "@material-tailwind/react";

export function Banner() {
  return (
    <div className="bg-banner-image bg-cover bg-center -mt-20">
      <div className="w-full h-full bg-black/20 py-20">
        <figure className="h-full w-full pt-10">
          <div className="container mx-auto flex flex-col-reverse md:flex-row w-[calc(100%-4rem)] items-center justify-between rounded-xl border border-white bg-white/80 p-5 md:py-16 md:px-10 shadow-lg shadow-black/5 saturate-150 backdrop-blur-sm">
            <div className="h-full w-auto md:w-1/2 md:flex mr-5">
              <figcaption className="w-full lg:p-5 p-0">
                <div className="">
                  <Typography className="text-[#F85023] text-2xl font-bold">Hello, I'm</Typography>
                  <Typography
                    variant="h1"
                    color="black"
                    className="mt-2 font-bold text-[#8770EA] text-2xl md:text-3xl"
                  >
                    Md Shohag Hossain
                  </Typography>
                  <Typography
                    color="gray"
                    className="font-bold  md:text-xxl text-[#39B76B]"
                  >
                    <span className="text-[#39B76B]">Engineer by Trade</span>,{" "}
                    <span className="text-[#39B76B]">Developer by Passion</span>
                  </Typography>
                  <p className="text-xl text-justify text-gray-700">
                    A results-driven Mechanical Engineer with a strong
                    foundation in mechanical systems design, CAD modeling, and
                    manufacturing processes — combined with full-stack web
                    development skills in modern front-end and back-end
                    technologies. Passionate about bridging the gap between the
                    physical and digital worlds, I create efficient,
                    user-focused engineering solutions and intuitive, scalable
                    web applications. Experienced in problem-solving across
                    disciplines, with a unique ability to think both
                    analytically and creatively.
                  </p>
                </div>
              </figcaption>
            </div>
            <div className="md:w-1/2 h-full flex flex-col justify-center">
              <div className="mx-auto p-1 my-5 bg-white rounded-br-[50%] rounded-tl-[50%] border-transparent shadow-2xl shadow-black/20 backdrop-blur-sm">
                <img
                  src={myPhoto2}
                  className="mx-auto w-full rounded-br-[50%] rounded-tl-[50%] object-cover object-center shadow-2xl "
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
