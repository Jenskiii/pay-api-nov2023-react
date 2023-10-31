import PersonalIcon from "../../assets/home/desktop/icon-personal-finances.svg"
import BankingIcon from "../../assets/home/desktop/icon-banking-and-coverage.svg"
import ConsumerIcon from "../../assets/home/desktop/icon-consumer-payments.svg"

import styles from "./finance.module.scss"

export function Finance(){

    const items = [
        { id: 1, image: PersonalIcon, title: "Personal Finances", text: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "},
        { id: 2, image: BankingIcon, title: "Banking & Coverage", text: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."},
        { id: 3, image: ConsumerIcon, title: "Consumer Payments", text: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."},
    ]

    return(
        <>
        <div className={`${styles.finance}  | even-columns`}>
            {items.map( (item) => {
                return (
                    <div key={item.id} className={styles.column}>
                        <img src={item.image} alt="payment icon" />
                        <h3 className="heading-5">{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                )
            })}

        </div>
        </>
    )
}