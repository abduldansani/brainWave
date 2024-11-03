import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa"
import styles from "./Footer.module.css"
import { FaXTwitter } from "react-icons/fa6"
const Footer = () => {
  return (
    <div className={styles.footer}>
          <div className={styles.logo}>
               <img src="/logo.png" alt="" />
               <div className={styles.logoname}>brain<span>Wave</span></div>
          </div>
          <div className={styles.footer__social}>
               <FaPhone />
               <FaWhatsapp />
               <FaFacebook />
               <FaXTwitter />
               <FaInstagram />
          </div>
    </div>
  )
}

export default Footer