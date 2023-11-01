import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { EmailSignUp } from "../../components/email-signup";

import styles from "./pricing.module.scss";
import { PricePlan } from "../../components/price-plan";

export function Pricing() {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>

      <main>
        {/* HERO */}
        <section className={styles["price-plan"]}>
        <div className="container">
          <h1 className="heading-2 | text-center">Pricing</h1>
          <PricePlan/>
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
