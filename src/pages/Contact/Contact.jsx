import Lottie from "lottie-react";
import contactEmail from "../../../public/call center support.json";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Card,
  Button,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import useAxiosPublic from "../../hooks/axiosPublic";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    /* setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 400); */

    axiosPublic.post("/send", { values }).then((res) => {
      console.log(res.data)
      if (res.data.message) {
        Swal.fire({
          icon: "success",
          title: "Login Successfully!",
          showCancelButton: false,
          timer: 1500,
        });
        resetForm();
      }
    });
    setSubmitting(false);
  };
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-center text-4xl text-primary font-bold my-10 ">
        Contact Me
      </h2>
      <div>
        <Lottie
          className="mx-auto w-full md:w-1/3"
          animationData={contactEmail}
          loop={true}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold text-secondary">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out to me for inquiries, collaborations, or
            opportunities. You can contact me directly via mobile or email, or
            simply leave me a message using the form. I’ll get back to you as
            soon as possible.
          </p>
          <p className="flex items-center">
            <IoCallSharp className="text-primary text-xl mr-2" />{" "}
            <a className="text-tertiary font-bold" href="tel:+8801911712162">
              +880 1911712162
            </a>
          </p>
          <p className="flex items-center">
            <MdEmail className="text-primary text-xl mr-2" />{" "}
            <a
              className="text-tertiary font-bold"
              href="mailto:shohagmdhossain@gmail.com"
            >
              shohagmdhossain@gmail.com
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Card color="transparent" shadow={false}>
            <Formik
              className="w-full"
              initialValues={{ name: "", email: "", message: "" }}
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
                if (!values.message) {
                  errors.message = "Required";
                }
                return errors;
              }}
              onSubmit={handleFormSubmit}
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
                        <Input {...field} size="lg" placeholder="name" />
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
                      Message
                    </Typography>
                    <Field name="message">
                      {({ field }) => (
                        <Textarea
                          {...field}
                          type="text"
                          size="lg"
                          placeholder="Message"
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      className="text-xs text-red-600"
                      name="message"
                      component="div"
                    />
                  </div>
                  <Button
                    className="bg-primary"
                    fullWidth
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
