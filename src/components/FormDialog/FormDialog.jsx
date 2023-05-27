import * as React from "react";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "../Alert/Alert";
import { sendMailer } from "../../api/product";

export default function FormDialog({
  state,
  onClose,
  productName,
  productLink,
}) {
  const [open, setOpen] = React.useState(state);
  const [form, setForm] = React.useState({
    email: "",
    product: productName,
    message: "",
    phone: "",
  });

  // email, option, username, phone, message

  const [snackBar, setSnackBar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  React.useEffect(() => {
    setOpen(state);
  }, [state]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     form.name.trim() == "" ||
  //     form.email.trim() == "" ||
  //     form.product.trim() == "" ||
  //     form.message.trim() == ""
  //   ) {
  //     setSnackBar({
  //       open: true,
  //       message: "Please complete all the fields",
  //       severity: "warning",
  //     });
  //     return;
  //   }

  // const mail = await sendMailer(form);
  // emailjs
  //   .send("service_xq57srq", "template_0wo5yhu", form, "bK_QkqNEdiHvz8zvu")
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
  // handleClose();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.name.trim() == "" ||
      form.email.trim() == "" ||
      form.product.trim() == "" ||
      form.message.trim() == ""
    ) {
      setSnackBar({
        open: true,
        message: "Please complete all the fields",
        severity: "warning",
      });
      return;
    }

    try {
      const mail = await sendMailer(form);
      setSnackBar({
        open: true,
        message: "Query sent successfully",
        severity: "success",
      });
    } catch (error) {
      setSnackBar({
        open: true,
        message: "Some error occurred",
        severity: "error",
      });
    }

    setForm({
      to_name: "DecorArt",
      from_name: "",
      email: "",
      phone_number: "",
      message: "",
      product_name: "General",
      product_link: "N/A",
    });
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enquiry Form</DialogTitle>
        <DialogContent>
          <b>Product</b>
          <p>{productName}</p>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            fullWidth
            variant="outlined"
          />

          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            value={form.message}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Alert
        {...snackBar}
        onClose={() => setSnackBar({ open: false, message: "", severity: "" })}
      />
    </div>
  );
}
