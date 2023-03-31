import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Rates_t } from "@/types";
import arrow from "../../public/arrow.svg";
import { useEffect, useState } from "react";

type selectCurrencies = "USD" | "UAH" | "EUR" | "PLN" | "CZK";
export default function ExchangeComponent(props: { rates: Rates_t }) {
  const [firstSelect, setFirstSelect] = useState<selectCurrencies | string>(
    "UAH"
  );
  const [secondSelect, setSecondSelect] = useState<selectCurrencies | string>(
    "UAH"
  );

  const [firstDisplay, setFirstDisplay] = useState<number>(0);
  const [secondDisplay, setSecondDisplay] = useState<number>(0);

  let EUR = 1 / props.rates?.EUR!;
  let USD = 1 / props.rates?.USD!;
  let PLN = 1 / props.rates?.PLN!;
  let CZK = 1 / props.rates?.CZK!;

  EUR = isNaN(EUR) ? 0 : EUR;
  USD = isNaN(USD) ? 0 : USD;
  PLN = isNaN(PLN) ? 0 : PLN;
  CZK = isNaN(CZK) ? 0 : CZK;
  let UAH = 1;

  const rates = { EUR: EUR, USD: USD, PLN: PLN, CZK: CZK, UAH: UAH };
  useEffect(() => {
    // @ts-ignore
    const total = firstDisplay / (1 / rates[firstSelect]);
    // @ts-ignore
    setSecondDisplay(total * (1 / rates[secondSelect]));
  }, [firstDisplay, firstSelect]);

  useEffect(() => {
    // @ts-ignore
    const total = secondDisplay / (1 / rates[secondSelect]);
    // @ts-ignore
    setFirstDisplay(total * (1 / rates[firstSelect]));
  }, [secondDisplay, secondSelect]);

  return (
    <div className={styles.exchange}>
      <div className={styles.exchange_top}>
        <input
          className={styles.exchange_input}
          type={"number"}
          placeholder={"0"}
          value={firstDisplay.toFixed(0)}
          onChange={(e) => {
            setFirstDisplay(Number(e.target.value));
          }}
        />
        <select
          className={styles.exchange_input}
          value={firstSelect}
          onChange={(e) => {
            setFirstSelect(e.target.value);
          }}
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="PLN">PLN</option>
          <option value="CZK">CZK</option>
        </select>
      </div>

      <Image
        src={arrow}
        className={styles.arrow}
        alt={"arrow"}
        width={100}
        height={100}
        onClick={() => {
          const tempDisplay = firstDisplay;
          const tempSelect = firstSelect;
          setFirstDisplay(secondDisplay);
          setFirstSelect(secondSelect);
          setSecondDisplay(tempDisplay);
          setSecondSelect(tempSelect);
        }}
      />

      <div className={styles.exchange_top}>
        <input
          className={styles.exchange_input}
          type={"number"}
          placeholder={"0"}
          value={Number(secondDisplay).toFixed(0)}
          onChange={(e) => {
            setSecondDisplay(Number(e.target.value));
          }}
        />
        <select
          className={styles.exchange_input}
          value={secondSelect}
          onChange={(e) => {
            setSecondSelect(e.target.value);
          }}
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="PLN">PLN</option>
          <option value="CZK">CZK</option>
        </select>
      </div>
    </div>
  );
}
