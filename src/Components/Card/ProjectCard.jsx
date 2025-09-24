import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  // if (!project) return null; // prevents crash
  //   const { name, image, description, technologies, projectLink } = project;
  return (
    <div className="flex flex-col">
      <Card className="mt-6 w-full mx-auto bg-b flex-grow min-w-[250px] ">
        <div>
          <img className="rounded-2xl " src={project.image} alt="card-image" />
        </div>
        <CardBody className="h-full">
          <div className="">
            <div className="">
              <Typography className="mb-2 text-xl font-bold text-secondary">
                {project.name}
              </Typography>
            </div>
            <div className="">
              <Typography className="text-justify">
                {project.description}
              </Typography>
            </div>
            <div className="pt-5">
              <h2 className="text-secondary font-bold ">Technologies</h2>
              <Typography className="">
                <ul>
                  {project.technologies?.map((technology, index) => (
                    <li className="" key={index}>
                      <span className="font-bold text-primary ">
                        {index + 1}
                      </span>{" "}
                      {technology}
                    </li>
                  ))}
                </ul>
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter className="text-right ">
          <Link
            className="bg-primary px-4 py-3 text-white rounded-md "
            to={`${project.projectLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Website
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
