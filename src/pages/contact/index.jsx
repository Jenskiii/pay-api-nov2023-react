import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { EmailSignUp } from "../../components/email-signup";
import { Partners } from "../../components/partners";

import styles from "./contact.module.scss";
import { Form } from "../../components/form";
export function Contact() {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className="heading-1">
              Submit a help request and we’ll get in touch shortly.
            </h1>
            <div className="even-columns-large">
              <div>
                <Form/>
              </div>
              <div className={styles["hero__partners"]}>
                <h4 className="heading-6">
                  Join the thousands of innovators already building with us
                </h4>
                <Partners theme="light" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles["sign-up"]}>
          <div className="container">
            <EmailSignUp
              text="Ready to start?"
              heading="heading-3"
              useCase="regular"
            />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
