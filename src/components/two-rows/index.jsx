import styles from "./two-rows.module.scss"

export function TwoRows({ firstTitle, firstText, secondTitle, secondText }) {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.row}`}>
          <h2 className="heading-4">{firstTitle}</h2>
          <p>{firstText}</p>
        </div>
        <div className={`${styles.row}`}>
          <h2 className="heading-4">{secondTitle}</h2>
          <p>{secondText}</p>
        </div>
      </div>
    </>
  );
}
