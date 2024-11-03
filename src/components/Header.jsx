import { useState } from "react"
import styles from "./Header.module.css"
import { MdMenuOpen } from "react-icons/md"
import { FaTimes } from "react-icons/fa"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="" />
          <div className={styles.logoname}>brain<span>Wave</span></div>
        </div>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Posts</a>
        </nav>
        <div className={styles.header__auth}>
          <a>Login</a>
          <a>Signup</a>
        </div>
        {!menuOpen && <MdMenuOpen 
          className={styles.openmenu}
          onClick={() => setMenuOpen(prev => !prev)}
        />}
      </div>
      { menuOpen && (
        <div className={styles.mobilemenu}>
            <div className={styles.mobilemenuw__top}>
              <div className={styles.logo}>
                  <img src="/logo.png" alt="" />
                  <div className={styles.logoname}>brain<span>Wave</span></div>
              </div>
              <FaTimes 
                className={styles.closemenu} 
                onClick={() => setMenuOpen(prev => !prev)}
              />
            </div>
            <div className={styles.mobilemenu__content}>
              <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Posts</a>
              </nav>
              <div className={styles.header__authmobile}>
                <a>Login</a>
                <a>Signup</a>
              </div>
            </div>
      </div>
      )}
    </>
  )
}

export default Header