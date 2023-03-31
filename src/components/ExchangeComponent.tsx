import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Rates_t } from "@/types";
import arrow from "../../public/arrow.svg";
import { useEffect, useState } from "react";

type selectCurrencies = "USD" | "UAH" | "EUR" | "PLN" | "CZK";
export default function ExchangeComponent(props: { rates: Rates_t }) {
  const [amountA, setAmountA] = useState<selectCurrencies>("UAH");
  const [amountB, setAmountB] = useState<selectCurrencies>("UAH");

  const [selectA, setSelectA] = useState<number>(0);
  const [selectB, setSelectB] = useState<number>(0);

  let EUR = 1 / (props.rates?.EUR ?? 1);
  let USD = 1 / (props.rates?.USD ?? 1);
  let PLN = 1 / (props.rates?.PLN ?? 1);
  let CZK = 1 / (props.rates?.CZK ?? 1);
  let UAH = 1;

  const rates = { EUR: EUR, USD: USD, PLN: PLN, CZK: CZK, UAH: UAH };
  useEffect(() => {
    // get total amount of entered money in UAH
    const total = selectA / (1 / rates[amountA]);
    // translate money into second input
    setSelectB(total * (1 / rates[amountB]));
  }, [selectA, amountA]);

  useEffect(() => {
    // get total amount of entered money in UAH
    const total = selectB / (1 / rates[amountB]);
    // translate money into second input
    setSelectA(total * (1 / rates[amountA]));
  }, [selectB, amountB]);

  return (
    <div className={styles.exchange}>
      <div className={styles.exchange_top}>
        <input
          className={styles.exchange_input}
          type={"number"}
          placeholder={"0"}
          value={selectA.toFixed(0)}
          onChange={(e) => {
            setSelectA(Number(e.target.value));
          }}
        />
        <select
          className={styles.exchange_input}
          value={amountA}
          onChange={(e) => {
            setAmountA(e.target.value as selectCurrencies);
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
          const tempDisplay = selectA;
          const tempSelect = amountA;
          setSelectA(selectB);
          setAmountA(amountB);
          setSelectB(tempDisplay);
          setAmountB(tempSelect);
        }}
      />

      <div className={styles.exchange_top}>
        <input
          className={styles.exchange_input}
          type={"number"}
          placeholder={"0"}
          value={Number(selectB).toFixed(0)}
          onChange={(e) => {
            setSelectB(Number(e.target.value));
          }}
        />
        <select
          className={styles.exchange_input}
          value={amountB}
          onChange={(e) => {
            setAmountB(e.target.value as selectCurrencies);
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
