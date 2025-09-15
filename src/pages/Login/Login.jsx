import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import loginAnimation from "../../../public/Wrench.json";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    signIn(values.email, values.password).then((result) => {
      console.log(result.user);
      Swal.fire({
        icon: "success",
        title: "Login Successfully!",
        showCancelButton: false,
        timer: 1500,
      });
      navigate("/super-shohag/users");
    });
    resetForm();
    setSubmitting(false);
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center my-10 font-bold text-primary">
        Login
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
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
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
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-2">
                  <div className="mb-1 flex flex-col gap-4">
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
                  </div>
                  <Button
                    className="bg-primary"
                    fullWidth
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-primary">
                Resister
              </Link>
            </Typography>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
