import styles from "./Project.module.scss";
import BackButton from "../back-button/BackButton";
import { useEffect } from "react";
import playIcon from "../../../assets/play.svg";
import githubIcon from "../../../assets/github.png";
import angular from "../../../assets/angular.svg";
import sass from "../../../assets/sass.png";

export default function InventoryManagerUI() {
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
          Inventory Manager UI: A Scalable Inventory Management Interface in
          Angular
        </h2>
        <div className={styles.logosContainer}>
          <img className={styles.logo} src={angular} alt="angular logo" />
          <img className={styles.logo} src={sass} alt="scss logo" />
        </div>
        <h5 className={styles.h5}>Overview:</h5>
        <p className={styles.p}>
          The Inventory Manager is a dynamic and responsive front-end
          application built with Angular and SCSS, designed to facilitate
          efficient inventory management. The project emphasizes modularity and
          scalability, adhering to best practices in software architecture to
          ensure maintainability and a seamless user experience. This
          application connects to a robust back-end API, providing comprehensive
          functionalities for managing products, categories, suppliers, and
          movements.
        </p>

        <div className={styles.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              window.location.href =
                "https://github.com/MPenunuri/inventorySystem";
            }}
          >
            <span>Go to source code</span>
            <img src={githubIcon} alt="Github icon" />
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href =
                "https://free-inventory-manager.netlify.app/";
            }}
          >
            <span>See project in action</span>
            <img src={playIcon} alt="Execute icon" />
          </button>
        </div>

        <h5 className={styles.h5}>Architecture:</h5>
        <p>
          The application follows a component-based architecture, enabling easy
          reuse and management of UI elements.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Components:</strong> Reusable UI components categorized by
            functionality.
            <ul className={styles.ul2}>
              <li className={styles.li}>
                <strong>Auth:</strong> Components for user authentication,
                including login and signup.
              </li>
              <li className={styles.li}>
                <strong>Commons:</strong> Shared components like buttons and
                form elements.
              </li>
              <li className={styles.li}>
                <strong>Landing page:</strong> Provides information about the
                application.
              </li>
              <li className={styles.li}>
                <strong>Workspace:</strong> Core operational components for
                managing inventory items.
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Guards:</strong> Route guards to ensure user
                permissions.
              </li>
              <li className={styles.li}>
                <strong>Interceptors:</strong> HTTP interceptors for
                authentication and error handling.
              </li>
              <li className={styles.li}>
                <strong>Models:</strong> TypeScript interfaces for data
                structures.
              </li>
              <li className={styles.li}>
                <strong>Services:</strong> Dedicated services for API
                interactions and business logic.
              </li>
              <li className={styles.li}>
                <strong>Assets:</strong> Static resources like images,
                stylesheets, and fonts.
              </li>
            </ul>
          </li>
        </ul>

        <h5 className={styles.h5}>Technical Details:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Framework:</strong> Developed with Angular for dynamic SPAs.
          </li>
          <li className={styles.li}>
            <strong>Styling:</strong> Utilizes SCSS for modular styling.
          </li>
          <li className={styles.li}>
            <strong>TypeScript:</strong> Provides static typing for improved
            code quality.
          </li>
          <li className={styles.li}>
            <strong>API Integration:</strong> Services manage API calls for
            maintainability.
          </li>
        </ul>

        <h5 className={styles.h5}>Key Features:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>User authentication:</strong> Secure login and registration
            with real-time validation.
          </li>
          <li className={styles.li}>
            <strong>Dynamic inventory management:</strong> Effortlessly manage
            products, categories, and suppliers.
          </li>
          <li className={styles.li}>
            <strong>User-friendly interface:</strong> Responsive design ensures
            a seamless experience across devices.
          </li>
          <li className={styles.li}>
            <strong>Real-time data updates:</strong> Live updates via back-end
            API.
          </li>
          <li className={styles.li}>
            <strong>Modular components:</strong> Encourages reusability and
            simplifies maintenance.
          </li>
          <li className={styles.li}>
            <strong>Input sanitization and validation:</strong> Enhances
            security and data integrity.
          </li>
        </ul>
      </section>
    </div>
  );
}
