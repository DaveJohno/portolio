import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Home/Home.scss";
import { ContactUs } from "./EmailForm";
import ModalBackBtn from "../ModalBackBtn";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 1200,
  height: "80%",
  maxHeight: 1200,
  bgcolor: " rgba(255, 255, 255, .9)",
  border: "5px solid rgba(225, 184, 127, 1)",
  boxShadow: 24,
  p: 4,
};

export default function ContactMeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="Item-heading" onClick={handleOpen}>
        <span className="material-icons">contact_page</span>
        <h4 className="Item-Icon">Contact</h4>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="" sx={style}>
            <h1 className="modal-heading">Contact Me</h1>

            <ContactUs />
            <ModalBackBtn handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
