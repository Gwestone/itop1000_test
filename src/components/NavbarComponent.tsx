import styles from "@/styles/Navbar.module.css";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import { Rates_t } from "@/types";

export default function NavbarComponent(props: { rates: Rates_t }) {
  let EUR = 1 / (props.rates?.EUR ?? 1);
  let USD = 1 / (props.rates?.USD ?? 1);
  let PLN = 1 / (props.rates?.PLN ?? 1);
  let CZK = 1 / (props.rates?.CZK ?? 1);

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
