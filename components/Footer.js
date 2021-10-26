import styles from "../styles/footer.module.css";
import Image from "next/image";
import Link from "next/dist/client/link";
import Menu from "./Menu";
import Profile from "./Profile";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <a>My Dope Code</a>
          </Link>
          <p>
            A blog by a developer.
            <br />
            For Web lovers.
          </p>
        </div>
        <div className={styles.menu}>
          <h3>Categories</h3>
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
