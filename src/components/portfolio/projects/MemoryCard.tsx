import styles from "./Project.module.scss";
import BackButton from "../back-button/BackButton";
import { useEffect } from "react";
import playIcon from "../../../assets/play.svg";
import githubIcon from "../../../assets/github.png";
import css from "../../../assets/css.png";
import react from "../../../assets/react.png";

export default function MemoryCardGame() {
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
          Pokémon Memory Card Game: A React-Based Memory Challenge
        </h2>

        <div className={styles.logosContainer}>
          <img className={styles.logo} src={react} alt="javascript logo" />
          <img className={styles.logo} src={css} alt="css logo" />
        </div>

        <h5 className={styles.h5}>Overview:</h5>
        <p className={styles.p}>
          The Pokémon Memory Card Game is an engaging and interactive memory
          challenge application developed with React, Vite, and ESLint. This
          game invites players to test their memory skills by matching Pokémon
          cards in a fun and visually appealing environment.
        </p>

        <div className={styles.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              window.location.href = "https://github.com/MPenunuri/memoryCard";
            }}
          >
            <span>Go to source code</span>
            <img src={githubIcon} alt="Github icon" />
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href = "https://pokemoncardsgame.netlify.app/";
            }}
          >
            <span>See project in action</span>
            <img src={playIcon} alt="Execute icon" />
          </button>
        </div>

        <h5 className={styles.h5}>Architecture:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>App:</strong> The central component that initializes the
            game and manages global state.
          </li>
          <li className={styles.li}>
            <strong>Game:</strong> Encapsulates the core gameplay mechanics,
            including choosing a Pokémon type, playing the game, and handling
            score tracking.
          </li>
          <li className={styles.li}>
            <strong>Choose Type:</strong> A dedicated area where players can
            select the type of Pokémon they wish to play with.
          </li>
          <li className={styles.li}>
            <strong>Play:</strong> The main gameplay area where players interact
            with cards to match pairs.
          </li>
          <li className={styles.li}>
            <strong>Game End:</strong> Displays the results and scores after a
            game session concludes.
          </li>
        </ul>

        <h5 className={styles.h5}>Technical Details:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Frameworks and Libraries:</strong> The application is built
            using React for component-based architecture, Vite for fast builds
            and hot module replacement, and ESLint for maintaining code quality
            and consistency.
          </li>
        </ul>

        <h5 className={styles.h5}>Key Features:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Intuitive Gameplay:</strong> Easy-to-understand mechanics
            that allow players of all ages to enjoy the game.
          </li>
          <li className={styles.li}>
            <strong>Type Selection:</strong> Players can choose from various
            Pokémon types, adding a layer of customization to the game.
          </li>
          <li className={styles.li}>
            <strong>Dynamic Card Matching:</strong> Cards are randomly generated
            and shuffled for each game session, ensuring a unique experience
            every time.
          </li>
          <li className={styles.li}>
            <strong>Score Tracking:</strong> Players' scores are calculated and
            displayed at the end of the game, providing a sense of achievement
            and competition.
          </li>
          <li className={styles.li}>
            <strong>Responsive Design:</strong> The application is designed to
            be mobile-friendly, ensuring a seamless experience across different
            devices.
          </li>
        </ul>
      </section>
    </div>
  );
}
