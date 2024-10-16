import styles from "./Profile.module.scss";
import img from "../../../assets/data.png";

export default function Profile() {
  return (
    <div className={styles.div}>
      <section className={styles.imgSection}>
        <img className={styles.img} src={img} alt="code logo" />
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Web developer</h2>
        <p className={styles.p}>
          I am a dedicated and skilled web developer with a strong focus on
          building robust, scalable, and efficient applications. My expertise
          spans both front-end and back-end development, leveraging modern
          technologies and best practices to deliver high-quality software
          solutions.
        </p>
        <h3 className={styles.h3}>Skills</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Back-end Development:</strong> Proficient in creating
            RESTful APIs using Java with Spring Boot and Express with
            TypeScript, employing Domain-Driven Design (DDD) principles for
            clean architecture.
          </li>
          <li className={styles.li}>
            <strong>Front-end Development:</strong>
            Experienced in building responsive, user-friendly interfaces using
            frameworks like Angular and React.
          </li>
        </ul>
        <h3 className={styles.h3}>Technical Proficiencies:</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Languages & Frameworks:</strong> Java, TypeScript,
            JavaScript, HTML, CSS, SCSS, React, Angular, Express, Spring Boot.
          </li>
          <li className={styles.li}>
            <strong>Databases: </strong>
            MySQL, MongoDB.
          </li>
          <li className={styles.li}>
            <strong>Development Tools: </strong>
            Git, Visual Studio Code, Webpack, Vite, ESLint, Prettier, Axios,
            React Query, Bootstrap.
          </li>
        </ul>
      </section>
    </div>
  );
}
