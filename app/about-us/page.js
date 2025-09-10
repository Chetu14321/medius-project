import styles from "../../styles/about.module.scss";

export default function AboutUsPage() {
  const timeline = [
    { year: 2014, title: "Founded by Vishal Garg", desc: "Inspired by personal challenges in home buying, Vishal founded Better.com to revolutionize the mortgage process." },
    { year: 2015, title: "First Online Mortgage Funded", desc: "Funded its first mortgage loan entirely online, eliminating the need for phone calls." },
    { year: 2016, title: "Fannie Mae Approval", desc: "Became a Fannie Mae approved seller and servicer, establishing relationships with top mortgage investors." },
    { year: 2017, title: "Expansion into Real Estate", desc: "Expanded into the real estate market with Better Real Estate." },
    { year: 2018, title: "Partnership with Ally Bank", desc: "Partnered with Ally Bank to build 'Ally powered by Better'." },
    { year: 2019, title: "American Express Partnership", desc: "Launched a pilot partnership with American Express to deliver a seamless homebuying experience." },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.hero}>
        <h1>About Us</h1>
        <p>
          We’re reimagining home ownership by making it simpler, faster, and more transparent. 
          Our mission is to help everyone find a better way to buy a home.
        </p>
      </div>

      <div className={styles.timeline}>
        <h2>Our Journey</h2>
        <div className={styles.timelineCards}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
