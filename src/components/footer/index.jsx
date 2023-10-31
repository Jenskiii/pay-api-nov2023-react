import { CompanyLogo, FacebookLogo, LinkedInLogo, TwitterLogo } from "../svgs";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={`${styles.container} | container flex-group`}>
           
        <div className={styles["nav-wrapper"]}>
            <Link className={styles["company-logo"]} to="./"><CompanyLogo width={"8.4375rem"}/></Link>
              <nav >
                <ul className={`${styles.nav} | flex-group`}>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
        </div>

          <div className={styles["socials-wrapper"]}>
          <ul className={`${styles.socials} | flex-group`}>
              <li>
                <a href="https://www.facebook.com/">
                  <FacebookLogo />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <TwitterLogo  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <LinkedInLogo  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
