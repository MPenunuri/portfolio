import styles from "./Projects.module.scss";
import spring from "../../../assets/spring.png";
import java from "../../../assets/java.png";
import angular from "../../../assets/angular.svg";
import sass from "../../../assets/sass.png";
import js from "../../../assets/js.png";
import css from "../../../assets/css.png";
import react from "../../../assets/react.png";
import bootstrap from "../../../assets/bootstrap.png";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Projects</h2>
      <div className={styles.grid}>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("project/inventory-api")}
        >
          <h4 className={styles.h4}>
            Inventory Manager API: A Domain-Driven RESTful Inventory Backend
          </h4>
          <div className={styles.logosContainer}>
            <img className={styles.logo} src={spring} alt="spring boot logo" />
            <img className={styles.logo} src={java} alt="java logo" />
          </div>
        </div>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("project/inventory-ui")}
        >
          <h4 className={styles.h4}>
            Inventory Manager UI: A Scalable Inventory Management Interface
          </h4>
          <div className={styles.logosContainer}>
            <img className={styles.logo} src={angular} alt="angular logo" />
            <img className={styles.logo} src={sass} alt="scss logo" />
          </div>
        </div>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("project/show-app")}
        >
          <h4 className={styles.h4}>
            The Show App: TV Show Search Application
          </h4>
          <div className={styles.logosContainer}>
            <img className={styles.logo} src={react} alt="angular logo" />
            <img className={styles.logo} src={bootstrap} alt="scss logo" />
          </div>
        </div>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("project/battleship")}
        >
          <h4 className={styles.h4}>
            Battleship - A Vanilla JavaScript Naval Battle Game
          </h4>
          <div className={styles.logosContainer}>
            <img className={styles.logo} src={js} alt="javascript logo" />
            <img className={styles.logo} src={css} alt="css logo" />
          </div>
        </div>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("project/memory-card")}
        >
          <h4 className={styles.h4}>
            Pokemon Memory Card Game: A Memory Challenge
          </h4>
          <div className={styles.logosContainer}>
            <img className={styles.logo} src={react} alt="javascript logo" />
            <img className={styles.logo} src={css} alt="css logo" />
          </div>
        </div>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("project/shopping-cart")}
        >
          <h4 className={styles.h4}>
            Online Store Simulator: React E-Commerce Application
          </h4>
          <div className={styles.logosContainer}>
            <img className={styles.logo} src={react} alt="javascript logo" />
            <img className={styles.logo} src={css} alt="css logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
