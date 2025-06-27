import DecodeText from "../../effects/decodeText";
import styles from "./startPageUI.module.css";

export default function StartPageUI() {
  return (
    <>
      <h3
        className={styles.name}
        style={{
          top: "20px",
          left: "20px",
          zIndex: 10,
          padding: "10px 20px",
        }}
      >
        <DecodeText text="Paul" speed={30} />
        <br />
        <DecodeText text="Bot" speed={30} />
      </h3>
    </>
  );
}
