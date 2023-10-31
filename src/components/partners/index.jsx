import { GoogleLogo, HPLogo, MicrosoftLogo, NvidiaLogo, OracleLogo, TeslaLogo } from "../svgs";

import styles from "./partners.module.scss"

export function Partners({theme}){
    return (
        <>
        <div className={styles.container} datatype={theme}>
            <TeslaLogo/>
            <MicrosoftLogo/>
            <HPLogo/>
            <OracleLogo/>
            <GoogleLogo/>
            <NvidiaLogo/>
        </div>
        </>
    )
}