import { useEffect, useState } from "react";
import img from "../../../../assets/self.jpeg";
import styles from "./Styles.module.scss";

const SelfImg = () => {
  const [invertFilter, setInvertFilter] = useState(0);

  const getPrimaryBackgroundColor = () => {
    const root = document.documentElement;
    return getComputedStyle(root)
      .getPropertyValue("--primary-background-color")
      .trim();
  };

  useEffect(() => {
    const updateInvertFilter = () => {
      const bgColor = getPrimaryBackgroundColor();
      if (bgColor === "black") {
        setInvertFilter(0);
      } else if (bgColor === "white") {
        setInvertFilter(1);
      }
    };

    const observer = new MutationObserver(() => {
      updateInvertFilter();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    updateInvertFilter();
    return () => {
      observer.disconnect();
    };
  }, []);

  const halftoneStyle: React.CSSProperties = {
    width: "25em",
    height: "calc(3 / 2 * 25em)",
    background: `url(${img}) center/cover, radial-gradient(circle, #000, #fff) 0 0/3px 3px space`,
    backgroundBlendMode: "screen",
    overflow: "hidden",
    filter: `contrast(19) grayscale(1) invert(${invertFilter}) drop-shadow(1px 1px 5px ${invertFilter === 1 ? "black" : "white"})`,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
  };

  const innerDivs = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className={styles.innerDiv}
      style={{ animationDelay: `${index * 0.125}s` }}
    ></div>
  ));

  return (
    <div className={styles.div} style={halftoneStyle}>
      {innerDivs}
      {innerDivs}
      {innerDivs}
      {innerDivs}
      {innerDivs}
      {innerDivs}
      {innerDivs}
      {innerDivs}
    </div>
  );
};

export default SelfImg;
