import { FaTrashAlt } from "react-icons/fa";
import DashboardTitle from "../../../Components/SectionTitle/DashboardTitle";
import { Button, Card, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMessages from "../../../hooks/useMessages";
import { CiViewTimeline } from "react-icons/ci";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const TABLE_HEAD = ["#" ,"Name", "Email", "Message", "View", "Delete"];

const Messages = () => {
  const [messages, , refetch] = useMessages();
  const [open, setOpen] = React.useState(false);
  const [selectedMessage, setSelectedMessage] = React.useState(null);
  const axiosSecure = useAxiosSecure();

  const handleOpen = (message = null) => {
    setSelectedMessage(message);
    setOpen(!open);
  };
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
        axiosSecure.delete(`/messages/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted",
              text: "Message has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <DashboardTitle heading={"All Message"}></DashboardTitle>
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
            {messages.map(({ _id, name, email, message, createdAt}, index) => {
              const isLast = index === messages.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index+1}
                    </Typography>
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
                      {message}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button
                      onClick={() => handleOpen({index, name, email, message, createdAt })}
                      className="bg-transparent p-0 shadow-none"
                    >
                      <CiViewTimeline className="text-tertiary text-2xl " />
                    </Button>
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

      <Dialog open={open} handler={() => handleOpen()}>
        <DialogHeader>
          <div className="flex flex-col">
            <span className="text-xs text-tertiary">Message {selectedMessage?.index+1}</span>
            <span className="text-primary">
            {selectedMessage?.name}</span>
            <div className="flex gap-5">
                <span className="text-xs text-secondary">{selectedMessage?.email}</span>
                <span className="text-xs text-gray-500">{selectedMessage?.createdAt}</span>
            </div>
          </div>
        </DialogHeader>
        <DialogBody className="text-gray-600">
          {selectedMessage?.message || ""}
        </DialogBody>
        <DialogFooter>
          <Button className="bg-primary " onClick={handleOpen}>
            <span>Okay</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Messages;
