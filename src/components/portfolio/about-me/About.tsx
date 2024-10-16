import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.div}>
      <section className={styles.imgSection}>
        <img
          className={styles.img}
          src="/code-slash-outline.svg"
          alt="code logo"
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>About me</h2>
        <p className={styles.p}>
          My passion for technology began during the COVID-19 pandemic in 2020,
          when I started programming to optimize my work as a Data Analyst at
          the Ministry of Culture of Jalisco. Since then, I've been dedicated to
          learning and developing technological solutions that solve problems
          efficiently.
        </p>
        <p className={styles.p}>
          I enjoy tackling complex problems with a logical and structured
          approach, always striving for the best technical solution while
          maintaining usability and aesthetics. I'm skilled in foundational web
          technologies such as HTML, CSS, and JavaScript, as well as modern
          tools like Angular, React and Spring Boot. I've developed projects
          ranging from intuitive user interfaces to robust backend systems,
          applying Domain-Driven Design principles and agile methodologies.
        </p>
        <p className={styles.p}>
          I see myself as a developer in constant growth, focused on writing
          scalable and maintainable code that addresses both current and future
          needs. I find great satisfaction in designing efficient and secure
          APIs, as well as creating user interfaces that transform complexity
          into something simple and visually appealing.
        </p>
        <p className={styles.p}>
          My professional approach is based on deeply understanding user and
          client needs and aligning technological solutions with those goals.
          Thanks to my multidisciplinary experience, I can adapt to various
          contexts and provide value at every stage of the development process.
        </p>
        <p className={styles.p}>
          I am currently looking to join a dynamic team where I can continue
          growing and face new challenges that allow me to keep learning and
          contributing with innovative solutions.
        </p>
      </section>
    </div>
  );
}
