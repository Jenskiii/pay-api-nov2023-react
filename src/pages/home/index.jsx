import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { EmailSignUp } from "../../components/email-signup";
import { EvenColumns } from "../../components/even-columns";
import { Partners } from "../../components/partners";
import { Finance } from "../../components/finance";

import { Link } from "react-router-dom";

import MobileImg from "../../assets/home/desktop/illustration-phone-mockup.svg";
import ScriptImg from "../../assets/home/desktop/illustration-easy-to-implement.svg";
import PhoneUiImg from "../../assets/home/desktop/illustration-simple-ui.svg";

import styles from "./home.module.scss";

export function Home() {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <div className={`${styles["hero__wrapper"]} | even-columns-large`}>
              <img src={MobileImg} alt="image of mobile phone" />
              <div className={styles["hero__information"]}>
                <EmailSignUp
                  text={"Start building with our APIs for absolutely free."}
                  heading="heading-1"
                  useCase="hero"
                />
              </div>
            </div>
          </div>
        </section>
        {/* PARTNERS */}
        <section
          className={`${styles.partners} | bg-secondary-400 clr-primary-100`}
        >
          <div className="container">
            <div
              className="even-columns-large"
              style={{ "--grid-gap": "4.25rem" }}
            >
              <Partners theme={"dark"} />

              <div className={styles["partners__information"]}>
                <h2 className="heading-3 | clr-primary-100">
                  Who we work with
                </h2>
                <p>
                  Today, millions of people around the world have successfully
                  connected their accounts to apps they love using our API. We
                  provide developers with the tools they need to create easy and
                  accessible experiences for their users.{" "}
                </p>
                <Link to="/about" className="button" datatype="secondary-dark">
                  About us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* implementation */}
        <section className={styles.implementation}>
          <EvenColumns
            image={ScriptImg}
            title="Easy to implement"
            text="   Our API comes with just a few lines of code. You’ll be up
                    and running in no time. We built our documentation page to
                    integrate payments functionality with ease."
            size="implement"
          />

          <div className={styles["implementation__background-circle"]}>
            <EvenColumns
              image={PhoneUiImg}
              title="Simple UI & UX"
              text="Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion."
              size="ui"
            />
          </div>
        </section>

        <section className={styles.finance}>
          <div className="container">
            <Finance />
            <div className={styles["finance__form"]}>
              <EmailSignUp
                text="Ready to start?"
                heading="heading-3"
                useCase="regular"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
