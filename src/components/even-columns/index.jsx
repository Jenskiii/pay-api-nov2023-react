import styles from "./even-columns.module.scss";

export function EvenColumns({ image, title, text, size }) {
  return (
    <>
      <div className="container">
        <div className={`${styles.container} even-columns-large`}>
          <img className={styles.image} src={image} datatype={size} />
          <div className={`${styles.information} | flow-medium`}>
            <h2 className="heading-3">{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
