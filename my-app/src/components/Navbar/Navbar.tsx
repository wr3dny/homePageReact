import { Link } from "react-router-dom"
import { t } from "i18next"
import { PATHS } from "../../consts/paths"
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav>
          <ul className={styles.main}>
            {PATHS.map((link) => (
              <li key={link.key}  >
                <Link to={link.path} className={styles.link}>{t(link.key)}</Link>
              </li>
            ))}
          </ul>
      </nav>
    )
}