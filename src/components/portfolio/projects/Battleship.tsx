import styles from "./Project.module.scss";
import BackButton from "../back-button/BackButton";
import { useEffect } from "react";
import playIcon from "../../../assets/play.svg";
import githubIcon from "../../../assets/github.png";
import js from "../../../assets/js.png";
import css from "../../../assets/css.png";

export default function Battleship() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <BackButton></BackButton>
      </div>
      <section className={styles.projectContainer}>
        <h2 className={styles.h2}>
          Battleship - A Vanilla JavaScript Naval Battle Game
        </h2>
        <div className={styles.logosContainer}>
          <img className={styles.logo} src={js} alt="javascript logo" />
          <img className={styles.logo} src={css} alt="css logo" />
        </div>
        <h5 className={styles.h5}>Overview:</h5>
        <p className={styles.p}>
          Battleship is a web-based naval battle game developed using
          fundamental front-end technologies: HTML, CSS, and JavaScript. The
          project avoids relying on any advanced frameworks or libraries,
          testing my core front-end development skills. The application is
          organized with a clear separation between the game logic and the user
          interface. Webpack was used to handle module bundling, and ESLint
          ensures code quality and best practices.
        </p>

        <div className={styles.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              window.location.href = "https://github.com/MPenunuri/battleship";
            }}
          >
            <span>Go to source code</span>
            <img src={githubIcon} alt="Github icon" />
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href = "https://battleshipmapera.netlify.app/";
            }}
          >
            <span>See project in action</span>
            <img src={playIcon} alt="Execute icon" />
          </button>
        </div>

        <h5 className={styles.h5}>Architecture:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Game Logic:</strong> Handles all core functionality,
            including:
            <ul className={styles.ul2}>
              <li className={styles.li}>
                <strong>Factories:</strong> Create essential game objects like
                boards, players, and ships.
              </li>
              <li className={styles.li}>
                <strong>Game operations:</strong> Managed in dedicated modules
                for actions like placing ships and validating attacks.
              </li>
            </ul>
          </li>
          <li className={styles.li}>
            <strong>User Interface (UI):</strong> Focuses on user interaction
            and dynamic updates through JavaScript while maintaining
            responsiveness with CSS.
            <ul className={styles.ul2}>
              <li className={styles.li}>
                <strong>Form and setup components:</strong> Manage initial game
                setup and configuration.
              </li>
              <li className={styles.li}>
                <strong>Game boards and panels:</strong> Display grids for
                players and AI, including interactivity for attacks.
              </li>
              <li className={styles.li}>
                <strong>Drag and drop tools:</strong> Intuitive ship placement
                using drag-and-drop functionality.
              </li>
            </ul>
          </li>
        </ul>

        <h5 className={styles.h5}>File Structure Overview:</h5>
        <p className={styles.p}>
          The project is structured to facilitate maintainability and clear
          separation of concerns, with a dedicated folder for components and
          modules.
        </p>

        <h5 className={styles.h5}>Technical Details:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>JavaScript:</strong> Pure vanilla JavaScript to demonstrate
            understanding of core web programming principles.
          </li>
          <li className={styles.li}>
            <strong>CSS:</strong> Custom stylesheets ensure visually appealing
            UI components.
          </li>
          <li className={styles.li}>
            <strong>Webpack:</strong> Used for efficient module bundling and
            management.
          </li>
          <li className={styles.li}>
            <strong>ESLint:</strong> Configured to enforce best coding practices
            with Prettier integration.
          </li>
        </ul>

        <h5 className={styles.h5}>Key Features:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Modular Design:</strong> Clear separation between game logic
            and UI for easier maintenance.
          </li>
          <li className={styles.li}>
            <strong>Drag and drop ship placement:</strong> Intuitive system for
            users to place ships on the grid.
          </li>
          <li className={styles.li}>
            <strong>AI Opponent:</strong> Features an AI with various attack
            strategies for enhanced gameplay.
          </li>
        </ul>
      </section>
    </div>
  );
}
