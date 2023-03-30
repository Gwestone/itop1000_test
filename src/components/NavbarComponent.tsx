import styles from "@/styles/Navbar.module.css";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import { Rates_t } from "@/types";

export default function NavbarComponent(props: { rates: Rates_t }) {
  let EUR = 1 / props.rates?.EUR!;
  let USD = 1 / props.rates?.USD!;
  let PLN = 1 / props.rates?.PLN!;
  let CZK = 1 / props.rates?.CZK!;

  EUR = isNaN(EUR) ? 0 : EUR;
  USD = isNaN(USD) ? 0 : USD;
  PLN = isNaN(PLN) ? 0 : PLN;
  CZK = isNaN(CZK) ? 0 : CZK;

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logo_icon}>
            <Image src={logo} alt={"logo"} width={40} height={40} />
          </div>
          <div className={styles.logo_text}>Monet change</div>
        </div>
        <div className={styles.rates}>
          <div className={styles.rate}>EUR {EUR.toFixed(2)}</div>
          <div className={styles.rate}>USD {USD.toFixed(2)}</div>
          <div className={styles.rate}>PLN {PLN.toFixed(2)}</div>
          <div className={styles.rate}>CZK {CZK.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
