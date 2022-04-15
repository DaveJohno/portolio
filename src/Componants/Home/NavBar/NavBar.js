import ".././Home.scss";
import AboutMeModal from "../../AboutME/AboutMe";
import ContactMe from "../../ContactMe/ContactMe";
import SkillsModal from "../../SkillsTechnologies/Skills";
import ProjectsModal from "../../Projects/Prdjects";
import ResumeModal from "../../Resume/Resume";
import WorkModal from "../../WorkHistory/WorkHistory";

export default function NavBar() {
  return (
    <nav className="Home-nav">
      <ul className="Nav-list">
        <li className="Nav-list-item">
          <div className="Nav-item">
            <AboutMeModal />
          </div>
        </li>
        <li className="Nav-list-item">
          <div className="Nav-item">
            <ProjectsModal />
          </div>
        </li>
        <li className="Nav-list-item">
          <div className="Nav-item">
            <SkillsModal />
          </div>
        </li>

        <li className="Nav-list-item">
          <div className="Nav-item">
            <WorkModal />
          </div>
        </li>
        <li className="Nav-list-item">
          <div className="Nav-item">
            <ResumeModal />
          </div>
        </li>
        <li className="Nav-list-item">
          <div className="Nav-item">
            <ContactMe />
          </div>
        </li>
      </ul>
    </nav>
  );
}
