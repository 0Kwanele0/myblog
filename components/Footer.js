import styles from "../styles/footer.module.css";
import Image from "next/image";
import Link from "next/dist/client/link";
import profile from "../assets/me.png";

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
            <a href="http://localhost:3000/post">React js</a>
            <a href="#">Next js</a>
            <a href="#">JavaScript</a>
            <a href="#">Html/Css</a>
            <a href="#">Back-end</a>
            <a href="#">Ui and Ux</a>
            <a href="#">Other</a>
          </nav>
        </div>
        <section className={styles.profile}>
          <div className={styles.image}>
            <Image
              className={styles.imageinner}
              height={60}
              layout="fixed"
              width={60}
              src={profile}
              alt="Kwanele Gamedze"
            />
          </div>
          <div className={styles.details}>
            <p>Kwanele Gamedze</p>
            <ul>
              <li>Github</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
