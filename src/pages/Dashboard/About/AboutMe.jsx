import { Formik, Form, Field, FieldArray } from "formik";
import { Card, Button, Typography, Input } from "@material-tailwind/react";
import useAboutMe from "../../../hooks/useAboutMe";
import DashboardTitle from "../../../Components/SectionTitle/DashboardTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ImageUpload from "../../../Components/ImageUpload/ImageUpload";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AboutMe = () => {
  const [aboutMe, , refetch] = useAboutMe();
  const [imageURL, setImageURL] = useState("");
  const [formResetKey, setFormResetKey] = useState(0);
  const axiosSecure = useAxiosSecure();
  const id = aboutMe[0]?._id;

  useEffect(() => {
    if (aboutMe[0]?.profilePicture) {
      setImageURL(aboutMe[0].profilePicture);
    }
  }, [aboutMe]);

  const initialValues = {
    profilePicture: imageURL || aboutMe[0]?.profilePicture || "",
    name: aboutMe[0]?.name || "",
    title: aboutMe[0]?.title || "",
    about: {
      education: {
        degrees: aboutMe[0]?.about?.education?.degrees || [
          { degree: "", university: "", graduationYear: "" },
        ],
      },
      futurePlan: aboutMe[0]?.about.futurePlan || "",
      researchInterest: aboutMe[0]?.about.researchInterest || [""],
      skills: {
        programming: aboutMe[0]?.about?.skills?.programming || [""],
        robotics: aboutMe[0]?.about?.skills?.robotics || [""],
        mechanicalDesignAndSimulation: aboutMe[0]?.about?.skills
          ?.mechanicalDesignAndSimulation || [""],
        others: aboutMe[0]?.about?.skills?.others || [""],
      },
    },
    contact: {
      email: aboutMe[0]?.contact?.email || "",
      whatsapp: aboutMe[0]?.contact?.whatsapp || "",
      github: aboutMe[0]?.contact?.github || "",
      linkedin: aboutMe[0]?.contact?.linkedin || "",
      facebook: aboutMe[0]?.contact?.facebook || "",
      instagram: aboutMe[0]?.contact?.instagram || "",
      x: aboutMe[0]?.contact.x || "",
    },
  };

  console.log(id);

  if (!aboutMe || aboutMe.length === 0)
    return <div className="text-center">Loading...</div>;

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    const updatedValues = {
      ...values,
      profilePicture: imageURL,
    };

    axiosSecure
      .patch(`/super-shohag/about-me/${aboutMe[0]?._id}`, updatedValues)
      .then((res) => {
        if (res.data.modifiedCount>0) {
          console.log("User added to the database");
          Swal.fire({
            icon: "success",
            title: "Successfully Updated the Project",
            showCancelButton: false,
            timer: 1500,
          });
        }
        console.log(res.data)
        setFormResetKey((prev) => prev + 1);
        refetch();
        resetForm();
        setImageURL("");
      });

    setSubmitting(false);
  };

  if (!aboutMe) return <p>Loading...</p>;

  return (
    <div>
      <DashboardTitle heading={"About Me"}></DashboardTitle>
      <div>
        <Card color="transparent" shadow={false}>
          <Formik
            className="w-full"
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
          >
            {({ values, isSubmitting }) => (
              <Form className="space-y-2">
                <div className="mb-1 flex flex-col gap-4 p-5 md:p-0">
                  <div>
                    <h2 className="text-center text-2xl text-tertiary font-bold py-5">
                      Profile Info
                    </h2>
                    <div className="gap-5 flex flex-col md:flex-row items-center ">
                      <Field name="profilePicture">
                        {({ field, form }) => (
                          <div className="w-full md:w-1/2 space-y-4">
                            <ImageUpload
                              key={formResetKey}
                              heading={"Profile Picture"}
                              onUpload={(url) => setImageURL(url)}
                              existingImage={field.value}
                            ></ImageUpload>
                          </div>
                        )}
                      </Field>
                      <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="w-full space-y-4">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-2 text-secondary"
                          >
                            Name
                          </Typography>
                          <Field name="name">
                            {({ field }) => (
                              <Input {...field} size="lg" placeholder="Name" />
                            )}
                          </Field>
                        </div>
                        <div className="w-full space-y-4">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-2 text-secondary"
                          >
                            Title
                          </Typography>
                          <Field name="title">
                            {({ field }) => (
                              <Input {...field} size="lg" placeholder="Title" />
                            )}
                          </Field>
                        </div>
                        <div className="w-full space-y-4">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-2 text-secondary"
                          >
                            Future Plan
                          </Typography>
                          <Field name="about.futurePlan">
                            {({ field }) => (
                              <Input {...field} size="lg" placeholder="Title" />
                            )}
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Research Interests */}
                    <h3 className="text-center text-2xl text-tertiary font-bold py-5">
                      Research Interests
                    </h3>
                    <FieldArray name="about.researchInterest">
                      {({ push, remove }) => (
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                            {values?.about?.researchInterest?.map((ri, idx) => (
                              <div
                                key={idx}
                                className="flex gap-2 items-center"
                              >
                                <Field
                                  name={`about.researchInterest.${idx}`}
                                  placeholder={`Research interest #${idx + 1}`}
                                  className="input flex-1"
                                >
                                  {({ field }) => (
                                    <Input
                                      {...field}
                                      size="lg"
                                      placeholder="Name"
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
                          </div>
                          <div className="text-right mt-5">
                            <Button
                              type="button"
                              onClick={() => push("")}
                              className=" bg-tertiary text-white rounded"
                            >
                              Add
                            </Button>
                          </div>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                  <div>
                    <h2 className="text-center text-2xl text-tertiary font-bold py-5">
                      Education
                    </h2>
                    <FieldArray name="about.education.degrees">
                      {({ push, remove }) => (
                        <div className="">
                          <div className="gap-2 w-full">
                            {values?.about?.education?.degrees?.map(
                              (edu, index) => (
                                <div key={index}>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
                                    <Field
                                      name={`about.education.degrees.${index}.degree`}
                                      placeholder="Degree"
                                      className="input flex-1"
                                    >
                                      {({ field }) => (
                                        <Input
                                          {...field}
                                          size="lg"
                                          placeholder="Name"
                                        />
                                      )}
                                    </Field>
                                    <Field
                                      name={`about.education.degrees.${index}.university`}
                                      placeholder="University"
                                      className="input"
                                    >
                                      {({ field }) => (
                                        <Input
                                          {...field}
                                          size="lg"
                                          placeholder="Name"
                                        />
                                      )}
                                    </Field>
                                    <Field
                                      name={`about.education.degrees.${index}.graduationYear`}
                                      placeholder="Graduation Year"
                                      className="input w-32"
                                    >
                                      {({ field }) => (
                                        <Input
                                          {...field}
                                          size="lg"
                                          placeholder="Name"
                                        />
                                      )}
                                    </Field>
                                  </div>
                                  <div className="text-right my-4 ">
                                    <Button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="bg-red-500 text-white rounded"
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                </div>
                              )
                            )}
                            <div className="text-right my-4">
                              <Button
                              type="button"
                                onClick={() =>
                                  push({
                                    degree: "",
                                    university: "",
                                    graduationYear: "",
                                  })
                                }
                                className=" bg-tertiary text-white rounded"
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                  <div>
                    <Typography
                      className="text-center text-2xl text-tertiary font-bold py-5"
                      variant="h6"
                    >
                      Skills
                    </Typography>
                    {[
                      "programming",
                      "robotics",
                      "mechanicalDesignAndSimulation",
                      "others",
                    ].map((skillType) => (
                      <div key={skillType}>
                        <Typography
                          variant="small"
                          className="font-semibold capitalize text-secondary"
                        >
                          {skillType}
                        </Typography>
                        <FieldArray name={`about.skills.${skillType}`}>
                          {({ push, remove }) => (
                            <div>
                              <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                                {values.about.skills[skillType]?.map(
                                  (skill, index) => (
                                    <div
                                      key={index}
                                      className="flex gap-2 items-center"
                                    >
                                      <Field
                                        name={`about.skills.${skillType}.${index}`}
                                      >
                                        {({ field }) => (
                                          <Input {...field} size="lg" />
                                        )}
                                      </Field>
                                      <Button
                                      type="button"
                                       className="rounded"
                                        onClick={() => remove(index)}
                                        color="red"
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                  )
                                )}
                              </div>
                              <div className="text-right my-5">
                                <Button
                                  type="button"
                                  className="bg-tertiary rounded"
                                  onClick={() => push("")}
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                          )}
                        </FieldArray>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h2 className="text-center text-2xl text-tertiary font-bold py-5">
                      Contact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                      <div className="space-y-4">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-2 text-secondary"
                        >
                          Email
                        </Typography>
                        <Field name="contact.email">
                          {({ field }) => (
                            <Input {...field} size="lg" placeholder="Email" />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-4">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-2 text-secondary"
                        >
                          Whatsapp
                        </Typography>
                        <Field name="contact.whatsapp">
                          {({ field }) => (
                            <Input
                              {...field}
                              size="lg"
                              placeholder="Whatsapp"
                            />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-4">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-2 text-secondary"
                        >
                          Github
                        </Typography>
                        <Field name="contact.github">
                          {({ field }) => (
                            <Input {...field} size="lg" placeholder="Github" />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-4">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-2 text-secondary"
                        >
                          LinkedIn
                        </Typography>
                        <Field name="contact.linkedin">
                          {({ field }) => (
                            <Input
                              {...field}
                              size="lg"
                              placeholder="LinkedIn"
                            />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-4">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-2 text-secondary"
                        >
                          Facebook
                        </Typography>
                        <Field name="contact.facebook">
                          {({ field }) => (
                            <Input
                              {...field}
                              size="lg"
                              placeholder="Facebook"
                            />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-4">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-2 text-secondary"
                        >
                          Instagram
                        </Typography>
                        <Field name="contact.instagram">
                          {({ field }) => (
                            <Input
                              {...field}
                              size="lg"
                              placeholder="Instagram"
                            />
                          )}
                        </Field>
                      </div>
                      <div className="space-y-4">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-2 text-secondary"
                        >
                          X
                        </Typography>
                        <Field name="contact.x">
                          {({ field }) => (
                            <Input {...field} size="lg" placeholder="X" />
                          )}
                        </Field>
                      </div>
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

export default AboutMe;
