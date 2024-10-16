import arrow from "../../../assets/arrow-down.png";
import styles from "./NextButton.module.scss";

export default function NextButton({ section }: { section: string }) {
  const scrollTo = () => {
    history.pushState(null, "", section);
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button type="button" className={styles.button} onClick={scrollTo}>
      <span>Go to next section</span>
      <img src={arrow} alt="arrow icon" />
    </button>
  );
}
