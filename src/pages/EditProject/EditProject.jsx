import { useParams } from "react-router-dom";
import DashboardTitle from "../../Components/SectionTitle/DashboardTitle";
import { Formik, Form, Field, FieldArray } from "formik";
import { Card, Button, Typography, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import Swal from "sweetalert2";

const EditProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    name: "",
      image: "",
      projectLink: "",
      description: "",
      technologies: [""],
      githubLink: "",
      type: "",
      status: "",
      features: [""],
      tags: [""],
  });
  const [imageURL, setImageURL] = useState("");
  const [formResetKey, setFormResetKey] = useState(0);
  const axiosSecure = useAxiosSecure();
  /* const {
    name,
    image,
    projectLink,
    description,
    technologies,
    githubLink,
    type,
    status,
    features,
    tags,
  } = project || {}; */

  /* const capitalize = (arr) => {
    return arr.map((item) => item.replace(/^\w/, (c) => c.toUpperCase()));
  }; */

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    const updatedValues = {
      name: values.name,
      image: imageURL,
      projectLink: values.projectLink,
      description: values.description,
      technologies: values.technologies || [""],
      githubLink: values.githubLink,
      type: values.type,
      status: values.status,
      features: values.feature || [""],
      tags: values.tags || [""],
    };

    const projectRes = await axiosSecure.patch(
      `/super-shohag/edit/${id}`,
      updatedValues
    );
    if (projectRes.data.modifiedCount > 0) {
      console.log("updated data");
      Swal.fire({
              title: "Updated Project",
              text: "Your file has been Updated.",
              icon: "success",
              timer: 1500,
            });
    }

    console.log(updatedValues, project);
    resetForm();
    setSubmitting(false);
  };

  useEffect(() => {
    if (id) {
      axiosSecure
        .get(`/super-shohag/edit/${id}`)
        .then((res) => {
          setProject(res.data);
          setImageURL(res.data.image);
        })
        .catch((err) => console.error("Error Fetching Project", err));
    }
  }, [id, axiosSecure]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <DashboardTitle heading={"Edit Project"}></DashboardTitle>
      <div>
        <Card color="transparent" shadow={false}>
          <Formik
            className="w-full"
            enableReinitialize
            initialValues={project}
            onSubmit={handleFormSubmit}
          >
            {({ values, isSubmitting }) => (
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
                          <Input {...field} size="lg" placeholder="name" />
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
                          <Input {...field} size="lg" placeholder="image" />
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
                            placeholder="description"
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <FieldArray name="technologies">
                        {({ push, remove }) => {
                          return (
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-2 text-secondary"
                              >
                                Technologies
                              </Typography>

                              {values?.technologies?.map((tech, idx) => (
                                <div key={idx} className="w-full space-y-4">
                                  <Field name={`technologies.${idx}`}>
                                    {({ field }) => (
                                      <Input
                                        {...field}
                                        size="lg"
                                        placeholder={`technologies.${idx}`}
                                      />
                                    )}
                                  </Field>
                                  <Button
                                    type="button"
                                    onClick={() => remove(idx)}
                                    className="bg-red-500 text-white rounded"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              ))}
                              <div className="text-right mt-5">
                                <Button
                                  onClick={() => push("")}
                                  className=" bg-tertiary text-white rounded"
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                          );
                        }}
                      </FieldArray>
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
                            placeholder="github link"
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
                          <Input {...field} size="lg" placeholder="type" />
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
                          <Input {...field} size="lg" placeholder="status" />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full space-y-4">
                      <FieldArray name="features">
                        {({ push, remove }) => {
                          return (
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-2 text-secondary"
                              >
                                Features
                              </Typography>

                              {values?.features?.map((tech, idx) => (
                                <div key={idx} className="w-full space-y-4">
                                  <Field name={`features.${idx}`}>
                                    {({ field }) => (
                                      <Input
                                        {...field}
                                        size="lg"
                                        placeholder={`features.${idx}`}
                                      />
                                    )}
                                  </Field>
                                  <Button
                                    type="button"
                                    onClick={() => remove(idx)}
                                    className="bg-red-500 text-white rounded"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              ))}
                              <div className="text-right mt-5">
                                <Button
                                  onClick={() => push("")}
                                  className=" bg-tertiary text-white rounded"
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                          );
                        }}
                      </FieldArray>
                    </div>
                    <div className="w-full space-y-4">
                      <FieldArray name="tags">
                        {({ push, remove }) => {
                          return (
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-2 text-secondary"
                              >
                                Tags
                              </Typography>

                              {values?.tags?.map((tech, idx) => (
                                <div key={idx} className="w-full space-y-4">
                                  <Field name={`tags.${idx}`}>
                                    {({ field }) => (
                                      <Input
                                        {...field}
                                        size="lg"
                                        placeholder={`tags.${idx}`}
                                      />
                                    )}
                                  </Field>
                                  <Button
                                    type="button"
                                    onClick={() => remove(idx)}
                                    className="bg-red-500 text-white rounded"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              ))}
                              <div className="text-right mt-5">
                                <Button
                                  onClick={() => push("")}
                                  className=" bg-tertiary text-white rounded"
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                          );
                        }}
                      </FieldArray>
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
                    Apply
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

export default EditProject;
