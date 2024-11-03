import Header from "./Header"
import styles from "./Hero.module.css"
import HeroBottom from "./HeroBottom"

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Header />
        <div className={styles.hero__legend}>
          <h1>Share What You Know, Learn What You Don’t, and Grow Without Limits</h1>
          <p>Explore ideas, share insights, and unlock endless possibilities together.</p>
          <div className={styles.hero__action}>
            <button>Share knowledge</button>
            <button>Learn</button>
          </div>
        </div>
      </div>
      <HeroBottom />
    </>
  )
}

export default Hero