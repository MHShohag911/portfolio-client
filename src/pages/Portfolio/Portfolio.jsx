import ProjectCard from "../../Components/Card/ProjectCard";
import useProjectsLinks from "../../hooks/useProjectsLinks";

const Portfolio = () => {
  const [projectsLinks, loading] = useProjectsLinks();
  return (
    <div className="container mx-auto">
        <h2 className="text-primary text-4xl text-center my-20 font-bold ">My All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                projectsLinks?.map(project => <ProjectCard key={project._id} project={project}></ProjectCard>)
            }
        </div>
    </div>
  );
};

export default Portfolio;
