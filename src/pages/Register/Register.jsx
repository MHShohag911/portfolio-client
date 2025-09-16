import {
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/Wrench.json";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { data, Link } from "react-router-dom";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import useAxiosPublic from "../../hooks/axiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [imageURL, setImageURL] = useState("");
  const [formResetKey, setFormResetKey] = useState(0);
  const axiosPublic = useAxiosPublic();
  console.log(imageURL)
  const handleRegister = (values, { setSubmitting, resetForm }) => {
    createUser(values.email, values.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(values.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: values.name,
            email: values.email,
            imageURL: imageURL
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if (res.data.insertedId) {
              console.log('User added to the database')
              Swal.fire({
                icon: "success",
                title: "User Created Successfully!",
                showCancelButton: false,
                timer: 1500,
              });
            }
            setImageURL("");
            setFormResetKey(prev => prev + 1)
          })
        })
        .catch((error) => console.error(error));
    });
    console.log(values);
    resetForm();
    setSubmitting(false);
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center my-10 font-bold text-primary">
        Register
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-1/2">
          <Lottie
            className="mx-auto w-full"
            animationData={loginAnimation}
            loop={true}
          />
        </div>
        <div className="p-5 w-full md:w-1/2 mx-auto">
          <Card color="transparent" shadow={false}>
            <Formik
              className="w-full"
              initialValues={{ name: "", email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              onSubmit={handleRegister}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-2">
                  <div className="mb-1 flex flex-col gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-2 text-secondary"
                    >
                      Your Name
                    </Typography>
                    <Field name="name">
                      {({ field }) => (
                        <Input {...field} size="lg" placeholder="Name" />
                      )}
                    </Field>
                    <ErrorMessage
                      className="text-xs text-red-600"
                      name="name"
                      component="div"
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-2 text-secondary"
                    >
                      Your Email
                    </Typography>
                    <Field name="email">
                      {({ field }) => (
                        <Input
                          {...field}
                          size="lg"
                          placeholder="name@mail.com"
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      className="text-xs text-red-600"
                      name="email"
                      component="div"
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-2 text-secondary"
                    >
                      Password
                    </Typography>
                    <Field name="password">
                      {({ field }) => (
                        <Input
                          {...field}
                          type="password"
                          size="lg"
                          placeholder="*********"
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      className="text-xs text-red-600"
                      name="password"
                      component="div"
                    />
                    <ImageUpload heading={"Profile Picture"} key={formResetKey} onUpload={(url)=>setImageURL(url)} existingImage={imageURL}></ImageUpload>
                  </div>
                  <Button
                    className="bg-primary"
                    fullWidth
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </Button>
                </Form>
              )}
            </Formik>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-primary">
                Login
              </Link>
            </Typography>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
