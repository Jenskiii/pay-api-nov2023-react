import { useState, useMemo } from "react";
import { Checkmark } from "../../components/checkmark";
import styles from "./form.module.scss";
import { checkCompany, checkEmail, checkMessage, checkName, checkTitle } from "./validators";

export function Form() {
  // values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  // checks is form is sumbitted or not
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  // will auto update form errors after submit
  const nameErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkName(name) : [];
  }, [isAfterFirstSubmit, name]);

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  const companyErrors = useMemo(() =>{
    return isAfterFirstSubmit ? checkCompany(company) : []
  },[isAfterFirstSubmit,company])

  const titleErrors = useMemo(() =>{
    return isAfterFirstSubmit ? checkTitle(title) : []
  },[isAfterFirstSubmit,title])

  const messageErrors = useMemo(() =>{
    return isAfterFirstSubmit ? checkMessage(message) : []
  },[isAfterFirstSubmit,message])

  //  resets form
  function resetForm() {
    setName(""),
      setCompany(""),
      setEmail(""),
      setCompany(""),
      setTitle(""),
      setMessage("");
  }

  function Submit(e) {
    e.preventDefault();

    setIsAfterFirstSubmit(true);
    const nameResults = checkName(name);
    const emailResults = checkEmail(email);
    const companyResults = checkCompany(company);
    const titleResults = checkTitle(title);
    const messageResults = checkMessage(message);

    if (
      nameResults.length === 0 &&
      emailResults.length === 0 &&
      companyResults.length === 0 &&
      titleResults.length === 0 &&
      messageResults.length === 0
    ) {
      alert("Succesfully Submitted");
      // reset form
      resetForm();
      setIsAfterFirstSubmit(false);
    }
  }

  return (
    <>
      <form
        onSubmit={Submit}
        action=""
        className={styles["contact-form"]}
        noValidate
      >
        <div className={styles["form-group"]}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Name"
            className={`${nameErrors.length > 0 && "error"} `}
          />
          {nameErrors.length > 0 && (
            <div className="error-message">{nameErrors.join(", ")}</div>
          )}
        </div>

        <div className={styles["form-group"]}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Email Address"
            className={`${emailErrors.length > 0 && "error"} `}
          />
          {emailErrors.length > 0 && (
            <div className="error-message">{emailErrors.join(", ")}</div>
          )}
        </div>

        <div className={styles["form-group"]}>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            id="company"
            type="text"
            placeholder="Company Name"
            className={`${companyErrors.length > 0 && "error"} `}
          />
          {companyErrors.length > 0 && (
            <div className="error-message">{companyErrors.join(", ")}</div>
          )}
        </div>

        <div className={styles["form-group"]}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="Title"
            className={`${titleErrors.length > 0 && "error"} `}
          />
          {titleErrors.length > 0 && (
            <div className="error-message">{titleErrors.join(", ")}</div>
          )}
        </div>

        <div className={styles["form-group"]}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            type="textarea"
            placeholder="Message"
            className={`${messageErrors.length > 0 && "error"} `}
          />
          {messageErrors.length > 0 && (
            <div className="error-message ">{messageErrors.join(", ")}</div>
          )}
        </div>

        <div className={`${styles["form-group"]} ${styles.checkbox}`}>
          <Checkmark label="Stay up-to-date with company announcements and updates to our API" />
        </div>

        <button className="button" datatype="secondary-light">
          Submit
        </button>
      </form>
    </>
  );
}
