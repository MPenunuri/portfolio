import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/arrow-back-outline.svg";
import styles from "./BackButton.module.scss";

export default function BackButton() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(-1);
  };

  return (
    <button type="button" className={styles.button} onClick={navigateTo}>
      <span>Go back</span>
      <img src={arrow} alt="arrow icon" />
    </button>
  );
}
