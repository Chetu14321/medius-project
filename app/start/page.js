// import styles from "@/styles/start.module.scss";
import styles from "..//../styles/start.module.scss"
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>The first AI-powered Mortgage</h1>
      <p>
        Our tech unlocks lower rates, higher chances of approval, and a
        lightning-fast process from approval to closing. Over $100 billion funded.
      </p>
      <div className={styles.ctaButtons}>
        <a href="/start" className={styles.ctaPrimary}>
          Get started 3 min | No hard credit check
        </a>
        <a href="/mortgage-calculator" className={styles.ctaSecondary}>
          Mortgage Calculator
        </a>
      </div>
    </section>
  );
}
