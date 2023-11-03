import { useState } from "react";
import styles from "./checkmark.module.scss";

export function Checkmark({ label }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className={styles["checkbox-wrapper"]}>
        <label>
          <input
            onChange={() => setIsChecked((prev) => !prev)}
            type="checkbox"
            checked={isChecked}
          />
          <span>{label}</span>
        </label>
      </div>
    </>
  );
}
