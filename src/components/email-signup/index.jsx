import { useState,useMemo } from "react";
import styles from "./email-signup.module.scss";
import { checkEmail } from "./validator";
import { Link } from "react-router-dom";

export function EmailSignUp({ text, heading, useCase }) {
  const [email, setEmail] = useState("");
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  // will auto update form errors after submit
  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  // form handeling
  function submit(e) {
    e.preventDefault();

    setIsAfterFirstSubmit(true);

    const emailResults = checkEmail(email)

    if(emailResults.length === 0){
        alert("Succesfully Submitted");

        // reset form
        setEmail("")
        setIsAfterFirstSubmit(false)
    }
  }


  return (
    <>
        <div className={styles.container} datatype={useCase}>
          <p className={`${styles.header} | ${heading}`}>{text}</p>
          <form onSubmit={submit} className={styles.form} noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`button ${emailErrors.length > 0 && "error"}`}
              placeholder="Enter email address"
            />
                {emailErrors.length > 0 && (
                <div className={styles["error-msg"]}>
                  {emailErrors.join(", ")}
                </div>
              )}
              {/* if wrong email format will disable button */}
            <button className={`button ${emailErrors.length > 0 && "disabled"}`} datatype="primary">
              Schedule a Demo
            </button>

            <p className={styles.paragraph}>Have any questions? <Link to="/contact" className={styles.link}>Contact Us</Link></p>
          </form>

        </div>
    </>
  );
}
