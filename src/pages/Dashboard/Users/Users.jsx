import { FaEdit, FaTrashAlt } from "react-icons/fa";
import DashboardTitle from "../../../Components/SectionTitle/DashboardTitle";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiAdminFill } from "react-icons/ri";

const TABLE_HEAD = ["#", "Image", "Name", "Email", "Role", "Make Admin", "Delete"];

const Users = () => {
  const [users, ,refetch] = useUsers();
  const axiosSecure = useAxiosSecure();
  console.log(users);
  const handleMakeAdmin = (id) => {
    const selectedUser = users.find(user => user._id === id)
    console.log(selectedUser)
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${selectedUser.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
  }
  return (
    <div>
      <DashboardTitle heading={"All User"}></DashboardTitle>
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
            {users?.map(({ _id, imageURL, name, email, role }, index) => {
              const isLast = index === users.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    {index+1}
                  </td>
                  <td className={classes}>
                    <Avatar src={imageURL} alt="avatar" variant="square" />
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
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {role ===  "Admin" ? <span className="flex items-center"><RiAdminFill className="text-secondary text-xl mr-2" />{role}</span> : "No Role"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button
                      onClick={() => handleMakeAdmin(_id)}
                      className="bg-transparent p-0 shadow-none"
                    >
                      <FaEdit className="text-tertiary text-2xl" />
                    </Button>
                  </td>
                  <td className={classes}>
                    <Button onClick={()=>handleDeleteUser(_id)} className="bg-transparent p-0 shadow-none">
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

export default Users;
