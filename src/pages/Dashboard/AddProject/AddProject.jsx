import { Formik, Form, Field } from "formik";
import { Card, Button, Typography, Input } from "@material-tailwind/react";
import DashboardTitle from "../../../Components/SectionTitle/DashboardTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ImageUpload from "../../../Components/ImageUpload/ImageUpload";
import { useState } from "react";

const arrayOfText = (text) => {
  let splittedText = text.split(",");
  let capitalize = splittedText.map((item) =>
    item.replace(/^\w/, (c) => c.toUpperCase())
  );
  return capitalize;
};

const AddProject = () => {
  const axiosSecure = useAxiosSecure();
  const [imageURL, setImageURL] = useState("");
  const [formResetKey, setFormResetKey] = useState(0);

  const handleAddProject = async (values, { setSubmitting, resetForm }) => {
    let techArray = [];
    let featuresArray = [];
    let tagsArray = [];

    techArray = arrayOfText(values.technologies);
    featuresArray = arrayOfText(values.features);
    tagsArray = arrayOfText(values.tags);

    const modifiedValue = {
      name: values.name,
      image: imageURL,
      projectLink: values.projectLink,
      description: values.description,
      technologies: techArray,
      githubLink: values.githubLink,
      type: values.type,
      status: values.status,
      features: featuresArray,
      tags: tagsArray,
    };

    const response = await axiosSecure.post(`/super-shohag/add`, modifiedValue);
    console.log(response.data);
    if (response.data.insertedId) {
      Swal.fire({
        title: "Deleted",
        text: "Your file has been deleted.",
        icon: "success",
        timer: 1500,
      });
      resetForm();
    }
    setSubmitting(false);
  };

  return (
    <div>
      <DashboardTitle heading={"Add Project"}></DashboardTitle>
      <div>
        <Card color="transparent" shadow={false}>
          <Formik
            className="w-full"
            enableReinitialize
            initialValues={{
              name: "",
              image: "",
              projectLink: "",
              description: "",
              technologies: "",
              githubLink: "",
              type: "",
              status: "",
              features: "",
              tags: "",
            }}
            onSubmit={handleAddProject}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-2">
                <div className="mb-1 flex flex-col gap-4 p-5 md:p-0">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Project Name
                      </Typography>
                      <Field name="name">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="Project Name"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Project Image
                      </Typography>
                      <Field name="image">
                        {({ field }) => (
                          <Input {...field} size="lg" placeholder="Image" />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Project Link
                      </Typography>
                      <Field name="projectLink">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="Project Link"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Description
                      </Typography>
                      <Field name="description">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="Description"
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Technologies
                      </Typography>
                      <Field name="technologies">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="Technologies"
                          />
                        )}
                      </Field>
                    </div>
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Github Link
                      </Typography>
                      <Field name="githubLink">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="Github Link"
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Type
                      </Typography>
                      <Field name="type">
                        {({ field }) => (
                          <Input {...field} size="lg" placeholder="Type" />
                        )}
                      </Field>
                    </div>
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Status
                      </Typography>
                      <Field name="status">
                        {({ field }) => (
                          <Input {...field} size="lg" placeholder="Status" />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Features
                      </Typography>
                      <Field name="features">
                        {({ field }) => (
                          <Input {...field} size="lg" placeholder="Features" />
                        )}
                      </Field>
                    </div>
                    <div className="w-full space-y-4">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-2 text-secondary"
                      >
                        Tags
                      </Typography>
                      <Field name="tags">
                        {({ field }) => (
                          <Input {...field} size="lg" placeholder="Tags" />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <ImageUpload
                        heading={"Project Image"}
                        key={formResetKey}
                        onUpload={(url) => setImageURL(url)}
                        existingImage={imageURL}
                      ></ImageUpload>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    className="bg-primary mx-auto"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Add
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default AddProject;
