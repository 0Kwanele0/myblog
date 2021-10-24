import styles from "../styles/nav.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>My Dope Code</a>
        </Link>
      </div>
      <nav className={styles.navigator}>
        <a href="http://localhost:3000/post">React js</a>
        <a href="#">Next js</a>
        <a href="#">JavaScript</a>
        <a href="#">Html/Css</a>
        <a href="#">Back-end</a>
        <a href="#">Ui and Ux</a>
        <a href="#">Other</a>
      </nav>
    </div>
  );
}

export default Navbar;
