import { useState } from "react"
import { CompanyLogo } from "../svgs";
import styles from "./nav.module.scss"
import { Link } from "react-router-dom"

export function Nav(){
    const [mobileNav, setMobileNav] = useState(false)
    return (
        <>
                <header>
                    <div className="container" >
                        <div className={styles.wrapper}>
                           <Link to="/"><CompanyLogo/></Link>
                            <button className={`${styles.hamburger} ${mobileNav ? styles.active : ""}`} onClick={() => setMobileNav(prev => !prev) } ></button>
                               <nav className={`${styles.nav}  ${mobileNav ? styles.active : ""}`} onClick={() => setMobileNav(false)}>
                                   <ul className={styles.list} onBlur={() => setMobileNav(false)}>
                                       <li ><Link to="/pricing" className={styles["nav-link"]}>Pricing</Link></li>
                                       <li ><Link to="/about" className={styles["nav-link"]}>About</Link></li>
                                       <li ><Link to="/contact" className={styles["nav-link"]}>Contact</Link></li>
                                   </ul>
                                   <Link to="/contact" className={`button ${styles.button}`} datatype="primary" onClick={() => setMobileNav(false)}>Schedule a Demo</Link>
                               </nav>
                        </div>
                    </div>
                </header>
        </>
    )
}