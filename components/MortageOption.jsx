"use client";

// import styles from "@/styles/start.module.scss";
import styles from "../styles/start.module.scss"
export default function MortgageOptions() {
  const options = [
    { label: "Buying a home", link: "/start/purchase" },
    { label: "Refinancing my mortgage", link: "/start/refinance" },
    { label: "Get cash from my home", link: "/start/heloc" },
  ];

  return (
    <div className={styles.mortgageOptions}>
      {options.map((option, index) => (
        <a key={index} href={option.link} className={styles.option}>
          {option.label}
        </a>
      ))}
    </div>
  );
}
