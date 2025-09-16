import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const ProjectCard = ({ project }) => {
  // if (!project) return null; // prevents crash
  //   const { name, image, description, technologies, projectLink } = project;
  return (
    <div>
      <Card className="mt-6 w-full mx-auto flex flex-col flex-1 min-w-[250px]">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="flex flex-col h-full">
          <div className="flex flex-col h-full">
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {project.name}
              </Typography>
            </div>
            <div>
              <Typography>{project.description}</Typography>
            </div>
            <div className="flex-grow">
              <Typography className="">
                <ul>
                  {project.technologies?.map((technology, index) => (
                    <li className="ml-5" key={index}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-primary">
            <a
              className=""
              href={`${project.projectLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Website
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
