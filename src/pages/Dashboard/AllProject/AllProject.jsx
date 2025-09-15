import { FaEdit, FaTrashAlt } from "react-icons/fa";
import DashboardTitle from "../../../Components/SectionTitle/DashboardTitle";
import useProjectsLinks from "../../../hooks/useProjectsLinks";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TABLE_HEAD = ["#", "Image", "Project", "Description", "Edit", "Delete"];

const AllProject = () => {
  const [projectsLinks, , refetch] = useProjectsLinks();
  const axiosSecure = useAxiosSecure();
  // console.log(projectsLinks);
  const handleDeleteProject = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/projects-links/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <DashboardTitle heading={"All Project"}></DashboardTitle>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projectsLinks.map(({ _id, image, name, description }, index) => {
              const isLast = index === projectsLinks.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    {index+1}
                  </td>
                  <td className={classes}>
                    <Avatar src={image} alt="avatar" variant="square" />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {description?.slice(0, 20)}...
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link
                      to={`/super-shohag/edit/${_id}`}
                      className="bg-transparent p-0 shadow-none"
                    >
                      <FaEdit className="text-tertiary text-2xl " />
                    </Link>
                  </td>
                  <td className={classes}>
                    <Button
                      onClick={() => handleDeleteProject(_id)}
                      className="bg-transparent p-0 shadow-none"
                    >
                      <FaTrashAlt className="text-primary text-2xl " />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AllProject;
