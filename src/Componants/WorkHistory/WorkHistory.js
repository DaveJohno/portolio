import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import "./WorkHistory.scss";
import "../Home/Home.scss";
import ModalBackBtn from "../ModalBackBtn";

//logos
import COGLogo from "./work_images/City-of-greater-geelong-logo-1.png";
import GALogo from "./work_images/ga_logo.png";
import BiraLogo from "./work_images/BiralleeTavern-Logo-White-2.png";

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
  // border: "5px solid rgba(225, 184, 127, 1)",
  boxShadow: 24,
  p: 4,
};

export default function WorkModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const workArr = [
    {
      title: "Instructor Associate",
      place: "General Assembly Australia",
      image: GALogo,
      description:
        "Working closely with the instructor to support the delivery of the content. Troubleshooting technical issues and debug. Provide support and mentoring to the students. Keep the instructor informed about the overall progress of thecohort as well as individual students.",
      date: "July 2022 - Current",
    },
    {
      title: "Software Engineering Student",
      place: "General Assembly Australia",
      image: GALogo,
      description:
        "12 week course, covering Front-End Development, Front-End Frameworks, APIs & Full-Stack Development. We leant Languages/frameworks including but not limited to HTML, CSS, JAVASCRIPT, REACT, SCSS, RUBY, SINATRA and PSQL databases, with overviews of countless additional concepts and techniques.",
      date: "January 2022 - April 2022",
    },
    {
      title: "Web Internship - Digital modernisation team",
      place: "City of Greater Geelong",
      image: COGLogo,
      description:
        "Prototyping web element, participating in meetings and liaising with internal and external parties in relation to the new web direction for the council.",
      date: "October 2021 - January 2022",
    },
    {
      title: "Front-End Web Development Student",
      place: "General Assembly Australia",
      image: GALogo,
      description:
        "10 week part-time course covering the fundamental building block to Building Dynamic, Responsive Websites. We leant  HTML, CSS and JAVASCRIPT. also covering additional concepts and techniques for the modern web.",
      date: "Augest 2021 - October 2021",
    },
    {
      title: "Gaming Supervisor",
      place: "Birallee Tavern",
      image: BiraLogo,
      description:
        "Medium Sized establishment with bar, bistro, TAB and Gaming services. Seating Capacity of 100 and 35 Staff. Responsibilities includedCash Handerling,Dealing with customer inquiries and complaints, problem solving.",
      date: "July 2017 - Augest 2021 ",
    },
  ];
  let jobs = workArr;

  return (
    <div>
      <Button className="Item-heading" onClick={handleOpen}>
        <span className="material-icons">work</span>
        <h4 className="Item-Icon">Experience</h4>
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
          <Box sx={style}>
            <div className="jobs">
              <ul className="job-list">
                {jobs.map((job, i) => (
                  <React.Fragment key={i}>
                    <li className="job-card">
                      {/* <img src={job.image} alt="" /> */}
                      <div className="job-employer">
                        <h2>{job.place}</h2>
                      </div>
                      <div className="job-title">
                        <h3>{job.title}</h3>
                      </div>
                      <div className="job-description">
                        <p>{job.description}</p>
                      </div>
                      <div className="job-date">
                        <h3>{job.date}</h3>
                      </div>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <ModalBackBtn handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
