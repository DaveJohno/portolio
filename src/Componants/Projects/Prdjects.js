import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Home/Home.scss";
import ModalBackBtn from "../ModalBackBtn";
import "./Projects.scss";

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

export default function ProjectsModal() {
  const projectsArr = [
    {
      title: "",
      image: "",
      description: "",
      link: "",
      date: "",
    },

    {
      title: "Tic Tac Toe",
      image: "",
      description: "",
      link: "",
      date: "",
    },
    {
      title: "Fast Feasts",
      image: "./project_images/fast_feasts.png",
      description:
        "This project allows users to browse a menu, make an order, add extra patrons to the table and allow any meal to have cooking instructions attached to that meal",
      link: "https://afternoon-crag-13970.herokuapp.com/",
      date: "february 2022",
    },

    {
      title: "",
      image: "",
      description: "",
      link: "",
      date: "",
    },

    {
      title: "Asteroids",
      image:
        "https://github.com/DaveJohno/project-four-asteroids/raw/master/readme_images/Screenshot%202022-04-10%20at%209.47.59%20pm.png",
      description:
        "my interperation of the classic game ready to play on the browser just modern tech including HTML, CSS, JavaScript and React",
      link: "https://davejohno-asteroids.herokuapp.com/",
      date: "April 2022",
    },
    {
      title: "Pet Regestation Form Prototype",
      image: "./project_images/pet_rego.png",
      description: "Prototype Web form, using javascript and bootstrap",
      link: "https://codepen.io/davejohno/full/abLyBZL",
      date: "December 2021",
    },
    {
      title: "COG Prototype",
      image: "./project_images/cog_website.png",
      description: "prototype landing page for Geelong City Council",
      link: "https://sad-aryabhata-17164e.netlify.app/",
      date: "November 2021",
    },
    {
      title: "wingz n thingz",
      image: "./project_images/wingz.png",
      description:
        "Final project for General Assembly's Front-end web development caurse. take-a-way shop website",
      link: "https://loving-mirzakhani-e20a3e.netlify.app/",
      date: "October 2021",
    },
  ];

  let projects = projectsArr;
  console.log(projects);
  console.log(projects[0]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="Item-heading" onClick={handleOpen}>
        <span className="material-icons">assignment</span>
        <h4 className="Item-Icon">Projects</h4>
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
            <div className="projects">
              <ul className="project-list">
                <img src="project_images/cog_website.png" alt="" />
                {projects.map((project, i) => (
                  <React.Fragment key={i}>
                    {console.log(project)}
                    <li className="project-card">
                      <img
                        className="project-image"
                        src={project.image}
                        alt=""
                      />

                      <div className="project-title">{project.title}</div>
                      <div className="project-description">
                        {project.description}
                      </div>
                      <div className="project-date">{project.date}</div>
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
