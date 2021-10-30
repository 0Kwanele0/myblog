import styles from "../styles/profile.module.css";

function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.image}>
        <img
          className={styles.imageinner}
          src="/me.png"
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://kwanelegamedze.com"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
