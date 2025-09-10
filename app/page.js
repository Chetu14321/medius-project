// import PrimaryButton from "../components/PrimaryButton";
// import styles from "../styles/home.module.scss";
import PrimaryButton from "@/components/PrimaryButton";
import styles from "@/styles/home.module.scss";
export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Find a better way to buy a home</h1>
        <p>
          Fast pre-approval, simple mortgage calculator, and clear steps to get started.
        </p>
        <div className={styles.ctaRow}>
          <PrimaryButton href="/start">Get Started</PrimaryButton>
          <PrimaryButton href="/mortgage-calculator" variant="secondary">
            Mortgage Calculator
          </PrimaryButton>
          <PrimaryButton href="/about-us" variant="secondary">
            About Us
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
