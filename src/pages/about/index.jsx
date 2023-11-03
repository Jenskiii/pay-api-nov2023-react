import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { EmailSignUp } from "../../components/email-signup";
import { TwoRows } from "../../components/two-rows";

import HeroImgMobile from "../../assets/about/mobile/image-team-members.jpg";
import HeroImgTablet from "../../assets/about/tablet/image-team-members.jpg";
import HeroImgDesktop from "../../assets/about/desktop/image-team-members.jpg";
import styles from "./about.module.scss";

export function About() {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>

      <main>
        {/* hero */}
        <section className={styles.vision}>
          <div className="container" data-type="narrow">
            <h1 className="heading-1 | text-center">
              We empower innovators by delivering access to the financial system
            </h1>

            <div className={styles["vision__two-rows"]}>
              <TwoRows
                firstTitle="Our Vision"
                firstText="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure.
               The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems
                We are deeply focused on democratizing financial services through technology. "
                secondTitle="Our Business"
                secondText="At the core of our platform is the technical infrastructure APIs that connect consumers.
               Our innovative product provides key insights for businesses and individuals,
                as well as robust reporting for traditional financial institutions and developers. "
              />
            </div>
          </div>
        </section>
        {/* Hero */}
        <section className={styles.hero}>
          <div>
            <picture>
              <source media="(min-width: 65em)" srcSet={HeroImgDesktop} />
              <source media="(min-width: 35em)" srcSet={HeroImgTablet} />
              <img src={HeroImgMobile} alt="team members working on a laptop" />
            </picture>
          </div>
        </section>

        {/* company bio */}
        <section className={styles.bio}>
          <div className="container">
            <div className={styles["bio__columns"]}>
              <div className={styles["bio__col"]}>
                <p className="fs-425 clr-secondary-300">Team Members</p>
                <span className="heading-1 | clr-primary-200">300+</span>
              </div>
              <div className={styles["bio__col"]}>
                <p className="fs-425 clr-secondary-300">Offices in the US</p>
                <span className="heading-1 | clr-primary-200">3</span>
              </div>
              <div className={styles["bio__col"]}>
                <p className="fs-425 clr-secondary-300">
                  Transactions analyzed
                </p>
                <span className="heading-1 | clr-primary-200">10M+</span>
              </div>
            </div>
          </div>
          <div className="container" data-type="narrow">
            <TwoRows
              firstTitle="The Culture"
              firstText="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work,
                 whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought,
                  no matter the job title. "
              secondTitle="The People"
              secondText="We're all passionate about building a more efficient and inclusive financial infrastructure together.
                 At PayAPI, we have diverse backgrounds and skills."
            />
          </div>
        </section>

        {/* sign up */}
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
