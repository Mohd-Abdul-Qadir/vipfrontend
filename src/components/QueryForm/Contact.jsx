import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";
import Alert from "../Alert/Alert";
import "./QueryForm.css";
import { useState } from "react";
import Appbar from "../Header/Appbar";
import Footer from "../Footer/Footer";
import { sendMailerContact } from "../../api/product";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClose = () => {
    setSnackBar({ open: false, message: "", severity: "" });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     form.name.trim() == "" ||
  //     form.email.trim() == "" ||
  //     form.message.trim() == ""
  //   ) {
  //     setSnackBar({
  //       open: true,
  //       message: "Please complete all the fields",
  //       severity: "warning",
  //     });
  //     return;
  //   }
  //   const mail = await sendMailerContact(form);

  // emailjs
  //   .send(
  //     "service_yw4xg9l",
  //     "template_yqd3ufl",
  //     form,
  //     "user_jT9XEwk6QORKaNhCpi5q6"
  //   )
  //   .then(
  //     function (response) {
  //       setSnackBar({
  //         open: true,
  //         message: "Query sent successfully",
  //         severity: "success",
  //       });
  //     },
  //     function (error) {
  //       setSnackBar({
  //         open: true,
  //         message: "Some error occurred",
  //         severity: "error",
  //       });
  //     }
  //   );
  // setForm({
  //   to_name: "DecorArt",
  //   from_name: "",
  //   email: "",
  //   phone_number: "",
  //   message: "",
  //   product_name: "General",
  //   product_link: "N/A",
  // });
  //   handleClose();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.email.trim() === "" ||
      form.name.trim() === "" ||
      form.message.trim() === ""
    ) {
      setSnackBar({
        open: true,
        message: "Please complete all the fields",
        severity: "warning",
      });
      return;
    }
    try {
      const mail = await sendMailerContact(form);
      if (mail.status === 200) {
        setSnackBar({
          open: true,
          message: "Query sent successfully",
          severity: "success",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setSnackBar({
        open: true,
        message: "Some error occurred",
        severity: "error",
      });
    }
  };
  return (
    <>
      <Appbar />
      <div
        style={{
          marginTop: "120px",
          textAlign: "center",
          background: "whitesmoke",
          padding: "20px 30px",
        }}
      >
        <h1>Contact Us</h1>
        <div className="quick-enquiry-form">
          <MDBInput
            label="Name"
            id="typeName"
            type="text"
            value={form.from_name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <MDBInput
            label="Email"
            id="typeEmail"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <MDBInput
            label="Leave a message for us"
            id="typeMessage"
            textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button onClick={handleSubmit} id="typeSubmit" className="btn-unique">
            Send
          </button>
          <Alert {...snackBar} onClose={handleClose} />
        </div>
      </div>
      <Footer />
    </>
  );
}
