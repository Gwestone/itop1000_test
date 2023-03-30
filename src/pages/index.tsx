import Head from "next/head";
import { useEffect, useState } from "react";

import { Rates_t } from "@/types";

import styles from "@/styles/Home.module.css";

import NavbarComponent from "@/components/NavbarComponent";
import NewsComponent from "@/components/NewsComponent";
import ExchangeComponent from "@/components/ExchangeComponent";

export default function Home() {
  const [exchangeRates, setExchangeRates] = useState<Rates_t>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "fZoNtQVijPNRnO1ENhm4LOypXhioi0PI";
    fetch(
      `https://api.apilayer.com/fixer/latest?base=UAH&symbols=USD,EUR,PLN,CZK`,
      {
        headers: {
          apikey: apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
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
