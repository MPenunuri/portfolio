import styles from "./Project.module.scss";
import BackButton from "../back-button/BackButton";
import { useEffect } from "react";
import playIcon from "../../../assets/play.svg";
import githubIcon from "../../../assets/github.png";
import css from "../../../assets/css.png";
import react from "../../../assets/react.png";

export default function OnlineStoreSimulator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <BackButton />
      </div>
      <section className={styles.projectContainer}>
        <h2 className={styles.h2}>
          Online Store Simulator: React E-Commerce Application
        </h2>
        <div className={styles.logosContainer}>
          <img className={styles.logo} src={react} alt="javascript logo" />
          <img className={styles.logo} src={css} alt="css logo" />
        </div>
        <h5 className={styles.h5}>Overview:</h5>
        <p className={styles.p}>
          The Online Store Simulator is a web application that mimics the
          experience of shopping in an online store. Built with React, the
          application interacts with the Fake Store API to fetch product data,
          allowing users to browse, add, and remove items from their shopping
          cart. It features a simulated login and authentication process,
          providing a realistic shopping experience without requiring user
          accounts. For demonstration purposes, you can log in with the
          following credentials:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Username</strong> don@gmail.com
          </li>
          <li className={styles.li}>
            <strong>Password</strong> ewedon
          </li>
        </ul>

        <div className={styles.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              window.location.href =
                "https://github.com/MPenunuri/shoppingCart";
            }}
          >
            <span>Go to source code</span>
            <img src={githubIcon} alt="Github icon" />
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href = "https://shoppingmapera.netlify.app";
            }}
          >
            <span>See project in action</span>
            <img src={playIcon} alt="Execute icon" />
          </button>
        </div>

        <h5 className={styles.h5}>Architecture:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Main Components:</strong> This includes the primary files
            that set up the application and manage routing, styling, and global
            context providers.
          </li>
          <li className={styles.li}>
            <strong>Components:</strong> A collection of reusable components
            that handle different parts of the user interface, such as the
            header, loading states, user authentication, product listings, and
            user information.
          </li>
          <li className={styles.li}>
            <strong>User and Product Context Providers:</strong> Context
            providers manage global state for user authentication and product
            data, allowing easy access throughout the app.
          </li>
          <li className={styles.li}>
            <strong>Routes:</strong> Defined routes to facilitate navigation
            between various views of the application, such as viewing all
            products, viewing a specific product's details, and managing the
            shopping cart.
          </li>
        </ul>

        <h5 className={styles.h5}>Technical Details:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>React and React Router:</strong> The application is built
            using React for the front end and employs React Router for
            client-side navigation, enabling seamless transitions between
            different pages.
          </li>
          <li className={styles.li}>
            <strong>State Management:</strong> The application leverages React's
            Context API to manage user authentication state and product data
            efficiently.
          </li>
          <li className={styles.li}>
            <strong>API Integration:</strong> Axios is used for making HTTP
            requests to the Fake Store API, allowing dynamic data fetching and
            updating the UI based on user interactions.
          </li>
          <li className={styles.li}>
            <strong>Data Fetching:</strong> The application utilizes React Query
            (@tanstack/react-query) to manage server state, providing caching,
            automatic refetching, and synchronization features.
          </li>
          <li className={styles.li}>
            <strong>Styling:</strong> Styled-components are used for styling the
            components, enabling a more dynamic and scoped approach to CSS
            management.
          </li>
          <li className={styles.li}>
            <strong>Type Checking:</strong> PropTypes is implemented to validate
            component props, ensuring the correct data types are passed to
            components.
          </li>
        </ul>

        <h5 className={styles.h5}>Key Features:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Product Browsing:</strong> Users can browse a list of
            products fetched from the Fake Store API, with the ability to view
            details for each product.
          </li>
          <li className={styles.li}>
            <strong>Shopping Cart Functionality:</strong> Users can add and
            remove products from a shopping cart, with real-time updates to the
            cart’s total amount.
          </li>
          <li className={styles.li}>
            <strong>User Authentication Simulation:</strong> The application
            simulates user login and authentication, allowing users to
            experience personalized interactions as if logged in.
          </li>
          <li className={styles.li}>
            <strong>Responsive Design:</strong> The application is designed to
            be responsive, providing an optimal viewing experience on various
            devices.
          </li>
        </ul>
      </section>
    </div>
  );
}
