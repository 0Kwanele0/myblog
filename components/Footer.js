import styles from "../styles/footer.module.css";
import Link from "next/dist/client/link";
import Menu from "./Menu";
import Profile from "./Profile";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              My<span>Dope</span>Code
            </a>
          </Link>
          <p>
            A blog by a developer.
            <br />
            For Web lovers.
          </p>
        </div>
        <div className={styles.menu}>
          <h5>Categories</h5>
          <nav className={styles.navigator}>
            <Menu />
          </nav>
        </div>
        <Profile />
      </div>
    </div>
  );
}

export default Footer;
