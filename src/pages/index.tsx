import Head from "next/head";
import { useEffect, useState } from "react";

import { Data, Rates_t } from "@/types";

import styles from "@/styles/Home.module.css";

import NavbarComponent from "@/components/NavbarComponent";
import NewsComponent from "@/components/NewsComponent";
import ExchangeComponent from "@/components/ExchangeComponent";

export default function Home() {
  const [exchangeRates, setExchangeRates] = useState<Rates_t>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=nolkmojr4LTqNd6X0a4EFuvFPeyaAna3fqMLAZdf&currencies=EUR%2CUSD%2CPLN%2CCZK&base_currency=UAH`,
      {}
    )
      .then((response) => response.json())
      .then((data) => {
        return Object.keys(data.data).reduce<Data>((acc, key) => {
          acc[key] = data.data[key].value;
          return acc;
        }, {});
      })
      .then((data) => {
        setExchangeRates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Monet Exchange</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {loading ? (
        <div className={styles.spinner}></div>
      ) : (
        <main className={styles.main}>
          <NavbarComponent rates={exchangeRates!} />
          <div className={styles.container}>
            <NewsComponent />
            <ExchangeComponent rates={exchangeRates!} />
          </div>
        </main>
      )}
    </>
  );
}
