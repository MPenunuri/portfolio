import SelfImg from "./self-img/SelfImg";
import styles from "./Header.module.scss";

export default function Header() {
  const scrollTo = (section: string) => {
    history.pushState(null, "", section);
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Hello! Welcome to my portfolio</h1>
        <p className={styles.p}>
          I'm Manuel Peñuñuri, a web developer from Guadalajara, Jalisco,
          Mexico, with experience in both front-end and back-end development.
        </p>
        <div className={styles.buttonsContainer}>
          <button onClick={() => scrollTo("#about")}>About me</button>
          <button onClick={() => scrollTo("#profile")}>
            Professional profile
          </button>
          <button onClick={() => scrollTo("#projects")}>Projects</button>
        </div>
      </section>
      <SelfImg />
    </header>
  );
}
