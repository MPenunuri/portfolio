import styles from "./Project.module.scss";
import BackButton from "../back-button/BackButton";
import { useEffect } from "react";
import playIcon from "../../../assets/play.svg";
import githubIcon from "../../../assets/github.png";
import spring from "../../../assets/spring.png";
import java from "../../../assets/java.png";

export default function InventoryApi() {
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
          Inventory Manager API: A Domain-Driven RESTful Inventory Backend
        </h2>
        <div className={styles.logosContainer}>
          <img src={spring} alt="spring boot logo" />
          <img src={java} alt="java logo" />
        </div>
        <p className={styles.p}>
          Comprehensive solution for inventory management designed to facilitate
          real-time control and oversight of products. This API enables users to
          perform create, read, update, and delete (CRUD) operations on
          inventory items while maintaining detailed logs of all transactions.
          With a focus on scalability, the application leverages reactive
          programming to handle multiple simultaneous requests without
          compromising performance.
        </p>
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              window.location.href =
                "https://github.com/MPenunuri/inventory-system";
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
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Domain layer: </strong>
            Encapsulates the core business logic and domain entities, allowing
            for clear separation from application logic.
          </li>
          <li className={styles.li}>
            <strong>Application layer: </strong>
            Manages application-level concerns and orchestrates interactions
            between the domain and infrastructure layers.
          </li>
          <li className={styles.li}>
            <strong>Infrastructure layer: </strong>
            Handles data access and external service communication, promoting
            decoupling and flexibility.
          </li>
        </ul>
        <h5 className={styles.h5}>Technical details:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Framework: </strong> Spring Boot
          </li>
          <li className={styles.li}>
            <strong>Reactive programming: </strong>
            Utilizes Spring WebFlux to enable non-blocking and reactive
            programming paradigms, facilitating better scalability and
            performance under load.
          </li>
          <li className={styles.li}>
            <strong>Data access:</strong>
            <ul className={styles.ul2}>
              <li className={styles.li}>
                <strong>Reactive repository: </strong>
                Implements standard CRUD operations through ReactiveRepository
                interfaces for basic data interactions.
              </li>
              <li className={styles.li}>
                <strong>Complex queries: </strong>
                Developed detailed SQL queries to handle complex data retrieval
                requirements, ensuring efficient and precise data access.
              </li>
              <li className={styles.li}>
                <strong>Multitenancy approach: </strong>
                Implemented a multitenancy strategy to support multiple users,
                allowing each tenant to have isolated data access while sharing
                the same application instance.
              </li>
            </ul>
          </li>
          <li className={styles.li}>
            <strong>Security measures:</strong>
            <ul className={styles.ul2}>
              <li className={styles.li}>
                <strong>CORS configuration: </strong>
                Implemented Cross-Origin Resource Sharing (CORS) controls to
                manage resource access across different origins, enhancing API
                security.
              </li>
              <li className={styles.li}>
                <strong>Rate limiting: </strong>
                Incorporated a RateLimiter to protect the API from abuse and
                ensure fair usage across all clients.
              </li>
              <li className={styles.li}>
                <strong>JWT authentication: </strong>
                Leveraged JSON Web Tokens (JWT) for secure authentication and
                authorization, allowing stateless session management.
              </li>
            </ul>
          </li>
        </ul>

        <h5 className={styles.h5}>Key features:</h5>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Comprehensive inventory management: </strong>
            Supports CRUD operations for inventory items, allowing users to
            efficiently manage their products.
          </li>
          <li className={styles.li}>
            <strong>Transaction logging: </strong>
            Maintains detailed logs of all inventory transactions, providing
            users with a complete history for auditing purposes.
          </li>
          <li className={styles.li}>
            <strong>Scalability and performance: </strong>
            The use of Spring WebFlux, combined with reactive data access,
            allows the API to handle high concurrency and large volumes of
            requests without blocking, ensuring a responsive user experience.
          </li>
        </ul>
      </section>
    </div>
  );
}
