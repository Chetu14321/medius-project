// import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageCalculator from "../../components/MortgageCalculator";
import styles from "../../styles/calculator.module.scss"
// import styles from "@/styles/calculator.module.scss";

export default function MortgageCalculatorPage() {
  return (
    <section className={styles.calc}>
      <MortgageCalculator />
    </section>
  );
}
