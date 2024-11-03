import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  return (
    <div className={styles.layout}>
        <div className={styles.layout__header}>
            <Header />
        </div>
        <div className={styles.layout__content}>
          <Outlet />
        </div>
        <div className={styles.layout__footer}>
            <Footer />
        </div>
    </div>
  )
}

export default Layout