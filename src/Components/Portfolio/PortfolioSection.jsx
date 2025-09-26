import { Link } from "react-router-dom";
import useProjectsLinks from "../../hooks/useProjectsLinks";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Button, Spinner } from "@material-tailwind/react";
import ProjectCard from "../Card/ProjectCard";

const PortfolioSection = () => {
  const [projectsLinks, loading] = useProjectsLinks();
  console.log(projectsLinks);
  /* if (loading) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }
  if (!projectsLinks || projectsLinks.length === 0) {
    return <div className="text-center">No projects found.</div>;
  } */
  return (
    <div className="container mx-auto p-5">
      <SectionTitle
        heading={"My Amazing Works"}
        subHeading={"Portfolio"}
        description={
          "Welcome to my portfolio! Here you’ll find a collection of my works that reflect my dual expertise in Mechanical Engineering and Web Development."
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsLinks?.slice(0,3).map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
      <div className="text-center my-10">
          <Link className="bg-tertiary mx-auto text-white px-4 py-3 rounded" to="/projects">Show All</Link>
      </div>
    </div>
  );
};

export default PortfolioSection;
