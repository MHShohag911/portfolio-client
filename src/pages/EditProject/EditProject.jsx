import { useParams } from "react-router-dom";
import DashboardTitle from "../../Components/SectionTitle/DashboardTitle";
import { Formik, Form, Field } from "formik";
import { Card, Button, Typography, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EditProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const axiosSecure = useAxiosSecure();
  const {
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
  } = project || {};

  const capitalize = (arr) => {
    return arr.map((item) => item.replace(/^\w/, (c) => c.toUpperCase()));
  };

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    let techArray = [project.technologies];
    let featuresArray = [project.features];
    let tagsArray = [project.tags];

    if (!Array.isArray(values.technologies)) {
      const newTech = values.technologies.split(",");
      techArray = capitalize(newTech);
    }
    if (!Array.isArray(values.features)) {
      const newFeature = values.features.split(",");
      featuresArray = capitalize(newFeature);
    }
    if (!Array.isArray(values.tags)) {
      const newTags = values.tags.split(",");
      tagsArray = capitalize(newTags);
    }
    const updatedValues = {
      name: values.name,
      image: values.image,
      projectLink: values.projectLink,
      description: values.description,
      technologies: techArray,
      githubLink: values.githubLink,
      type: values.type,
      status: values.status,
      features: featuresArray,
      tags: tagsArray,
    };

    const projectRes = await axiosSecure.patch(`/super-shohag/edit/${id}`, updatedValues)
    if(projectRes.data.modifiedCount>0){
        console.log("updated data")
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
            initialValues={{
              name: name || "",
              image: image || "",
              projectLink: projectLink || "",
              description: description || "",
              technologies: technologies || "",
              githubLink: githubLink || "",
              type: type || "",
              status: status || "",
              features: features || "",
              tags: tags || "",
            }}
            onSubmit={handleFormSubmit}
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
                          <Input
                            {...field}
                            size="lg"
                            placeholder="image"
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
                            placeholder="technologies"
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
                          <Input
                            {...field}
                            size="lg"
                            placeholder="type"
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
                        Status
                      </Typography>
                      <Field name="status">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="status"
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
                        Features
                      </Typography>
                      <Field name="features">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="features"
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
                        Tags
                      </Typography>
                      <Field name="tags">
                        {({ field }) => (
                          <Input
                            {...field}
                            size="lg"
                            placeholder="tags"
                          />
                        )}
                      </Field>
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
