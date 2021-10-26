import Image from "next/image";
import styles from "../styles/profile.module.css";
import profile from "../assets/me.png";

function Profile() {
  return (
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
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/0Kwanele0"
            >
              Github
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="">
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kwanelegamedze/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
