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

// project images
import fastFeasts from "./project_images/fast_feasts.png";
import COG from "./project_images/cog_website.png";
import petRego from "./project_images/pet_rego.png";
import wingz from "./project_images/wingz.png";
import ticTacToe from "./project_images/tic_tac_toe.jpeg";
import gadgetFlippers from "./project_images/gadgetFlippers.png";
import LPS from "./project_images/LPS.png";

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
      title: "wingz n thingz",
      image: wingz,
      description:
        "Final project for General Assembly's Front-end web development caurse. take-a-way shop website",
      link: "https://loving-mirzakhani-e20a3e.netlify.app/",
      date: "October 2021",
      github: "",
    },
    {
      title: "Pet Regestation Form (Prototype)",
      image: petRego,
      description: "Prototype Web form, using javascript and bootstrap",
      link: "https://codepen.io/davejohno/full/abLyBZL",
      date: "December 2021",
      github: "",
    },
    {
      title: "COG Landing page (Prototype)",
      image: COG,
      description: "prototype landing page for Geelong City Council",
      link: "https://sad-aryabhata-17164e.netlify.app/",
      date: "November 2021",
      github: "",
    },

    {
      title: "LAPIS, PAPYRUS, SCALPELLUS!",
      image: LPS,
      description:
        "Project 0 for GA's Software Engineering Immersive. A veriation on Rock, Scissors, Paper",
      link: "https://codepen.io/davejohno/full/RwLoMyq",
      date: "January 2022",
      github: "",
    },

    {
      title: "Tic Tac Toe",
      image: ticTacToe,
      description:
        "A game in which two players take turns putting circles and crosses on a 3x3 grid and try to get three of the same symbols in a line",
      link: "https://davejohno.github.io/tic-tac-toe/",
      date: "February 2022",
      github: "",
    },
    {
      title: "Fast Feasts",
      image: fastFeasts,
      description:
        "This project allows users to browse a menu, make an order, add extra patrons to the table and allow any meal to have cooking instructions attached to that meal",
      link: "https://afternoon-crag-13970.herokuapp.com/",
      date: "february 2022",
      github: "",
    },

    {
      title: "Gadget Flippers",
      image: gadgetFlippers,
      description:
        "Project 3 was a group project. using github we worked together to produce this ingame item auction site. if has user login and users are able to post austions",
      link: "https://auction-app-heroku.herokuapp.com/",
      date: "March 3 2022",
      github: "",
    },

    {
      title: "Asteroids",
      image:
        "https://github.com/DaveJohno/project-four-asteroids/raw/master/readme_images/Screenshot%202022-04-10%20at%209.47.59%20pm.png",
      description:
        "my interperation of the classic game ready to play on the browser just modern tech including HTML, CSS, JavaScript and React",
      link: "https://davejohno-asteroids.herokuapp.com/",
      date: "April 2022",
      github: "",
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
                {projects.reverse().map((project, i) => (
                  <React.Fragment key={i}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="project-card">
                        <img
                          className="project-image"
                          src={project.image}
                          alt=""
                        />

                        <div className="project-title">
                          <h3>{project.title.toUpperCase()}</h3>
                        </div>
                        <div className="project-description">
                          <p>
                            <b>Description: </b>
                            {project.description}
                          </p>
                        </div>
                        <div className="project-date">
                          <p>
                            <b> Date: </b> {project.date}
                          </p>
                        </div>
                      </li>
                    </a>
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
