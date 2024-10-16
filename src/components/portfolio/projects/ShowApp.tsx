import styles from "./Project.module.scss";
import BackButton from "../back-button/BackButton";
import { useEffect } from "react";
import playIcon from "../../../assets/play.svg";
import githubIcon from "../../../assets/github.png";
import react from "../../../assets/react.png";
import bootstrap from "../../../assets/bootstrap.png";

export default function ShowApp() {
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
          The Show App: React TV Show Search Application
        </h2>
        <div className={styles.logosContainer}>
          <img className={styles.logo} src={react} alt="angular logo" />
          <img className={styles.logo} src={bootstrap} alt="scss logo" />
        </div>
        <h5 className={styles.h5}>Overview:</h5>
        <p className={styles.p}>
          This project is a front-end web application built with React that
          allows users to search for TV shows and display detailed information
          about them by fetching data from the TVmaze API. The app is designed
          with a clean and straightforward user interface, where users can
          easily search for TV shows through a search bar and view information
          such as cast details, seasons, and episodes.
        </p>
        <p className={styles.p}>
          The application leverages Vite for a fast and efficient development
          environment and uses Bootswatch, a custom theming layer for Bootstrap,
          to style the UI components. The focus of this project is on
          implementing a smooth and responsive user experience while utilizing
          the power of React's component-based architecture.
        </p>

        <div className={styles.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              window.location.href = "https://github.com/MPenunuri/show-app";
            }}
          >
            <span>Go to source code</span>
            <img src={githubIcon} alt="Github icon" />
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href = "https://findashow.netlify.app/";
            }}
          >
            <span>See project in action</span>
            <img src={playIcon} alt="Execute icon" />
          </button>
        </div>

        <h5 className={styles.h5}>Architecture:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Core Components:</strong> Structured around key components
            that define the primary layout and user experience, including the
            main layout, header, search results, and detailed views of
            individual TV shows.
          </li>
          <li className={styles.li}>
            <strong>Show-Specific Components:</strong> Focused on rendering
            detailed information about TV shows, such as cast details, season
            summaries, and episode lists, ensuring modularity and reusability.
          </li>
          <li className={styles.li}>
            <strong>Custom Hooks:</strong> Used to manage the logic for fetching
            data from the TVmaze API and handling app-specific functionality,
            keeping components clean and focused on rendering the UI.
          </li>
          <li className={styles.li}>
            <strong>Service Layer:</strong> Manages API calls and abstracts the
            logic of data retrieval, enhancing maintainability by centralizing
            API interactions.
          </li>
        </ul>

        <h5 className={styles.h5}>Technical Details:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>React:</strong> Built using functional components and hooks
            for managing state and effects.
          </li>
          <li className={styles.li}>
            <strong>Vite:</strong> Provides a fast setup for the development
            environment with optimized bundling.
          </li>
          <li className={styles.li}>
            <strong>Bootswatch:</strong> A theming layer for Bootstrap that
            gives the app a modern look with predefined styles.
          </li>
          <li className={styles.li}>
            <strong>TVmaze API:</strong> Data is fetched from the TVmaze API,
            populating information about TV shows, including casts, summaries,
            and episodes.
          </li>
        </ul>

        <h5 className={styles.h5}>Key Features:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Search Functionality:</strong> Users can search for any TV
            show or series, retrieving results from the TVmaze API and
            displaying them.
          </li>
          <li className={styles.li}>
            <strong>Show Details Page:</strong> Access detailed information for
            each show, including title, description, poster, cast information,
            and breakdowns of seasons and episodes.
          </li>
          <li className={styles.li}>
            <strong>Responsive Design:</strong> Styled with Bootswatch to ensure
            a smooth user experience across mobile and desktop devices.
          </li>
          <li className={styles.li}>
            <strong>Custom Hooks & Services:</strong> Data fetching is
            abstracted into services, with custom hooks managing logic to keep
            components focused on UI rendering.
          </li>
        </ul>
      </section>
    </div>
  );
}
