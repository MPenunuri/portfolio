import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.section}>
      <h2>Contact me</h2>
      <p>
        If you have any questions or would like to discuss potential
        collaborations, feel free to reach out via email:
      </p>
      <a href="mailto:manuel.penunuri.ram@gmail.com">
        manuel.penunuri.ram@gmail.com
      </a>
    </section>
  );
}
