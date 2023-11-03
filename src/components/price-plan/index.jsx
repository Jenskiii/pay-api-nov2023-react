import { CheckMark } from "../svgs";
import { Link } from "react-router-dom"
import styles from "./price-plan.module.scss";

export function PricePlan() {
  const plans = [
    {
      key: 1,
      title: "Free Plan",
      text: "Build and test using our core set of products with up to 100 API requests ",
      price: "$0.00",
    },
    {
      key: 2,
      title: "Basic Plan",
      text: "Launch your project with unlimited requests and no contractual minimums ",
      price: "$249.00",
    },
    {
      key: 3,
      title: "Premium Plan",
      text: "Get tailored solutions, volume pricing, and dedicated support for your team ",
      price: "$499.00",
    },
  ];

  const features = [
    {
      item: "Transactions",
      key: 1,
    },
    { item: "Auth", key: 2 },
    {
      item: "Identity",
      key: 3,
    },
    {
      item: "Investments",
      key: 4,
    },
    {
      item: "Assets",
      key: 5,
    },
    {
      item: "Liabilities",
      key: 6,
    },
    {
      item: "Income",
      key: 7,
    },
  ];

  function setActive(plan, feature) {
    if (plan === 1 && feature > 3) {
      return "disabled";
    } else if (plan === 2 && feature > 5) {
      return "disabled";
    } 
  }

  return (
    <>
      <div className={`${styles.container} | even-columns`}>
        {plans.map((plan) => {
          return (
            <div className={styles.card} key={plan.key}>
              <div>
                <h2 className="heading-4 | clr-primary-200">{plan.title}</h2>
                <p>{plan.text}</p>
                <p className="heading-2">{plan.price}</p>
              </div>

              <ul className={styles.list}>
                {features.map((feature) => {
                  return (
                    <div
                      key={feature.key}
                      className={styles["list-item"]}
                      datatype={setActive(plan.key, feature.key)}
                    >
                      <CheckMark />
                      <li>{feature.item}</li>
                    </div>
                  );
                })}
              </ul>

              <Link to="./contact" className="button" datatype="secondary-light">
                Request Access
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
