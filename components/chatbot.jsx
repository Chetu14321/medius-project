"use client";

// import styles from "@/styles/start.module.scss";
import styles from "../styles/start.module.scss"

export default function Chatbot() {
  return (
    <div className={styles.chatbot}>
      <div className={styles.chatHeader}>
        <span className={styles.chatIcon}>💬</span>
        <span className={styles.chatName}>Hi, I'm Betsy!</span>
      </div>
      <p className={styles.chatPrompt}>What can I help you with?</p>
    </div>
  );
}
