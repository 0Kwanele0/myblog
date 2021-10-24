import Image from "next/image";
import cover from "../../assets/display.png";
import profile from "../../assets/me.png";
import styles from "../../styles/post.module.css";

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.postwrapper}>
        <div>
          <Image
            className={styles.coverimage}
            height={300}
            layout="responsive"
            src={cover}
            alt="article cover"
          />
        </div>
        <h1>How to render cool elements on react js</h1>

        <div className={styles.postmeta}>
          <section className={styles.date}>
            <p>23 JUN 2021</p>
            <ul className={styles.taglist}>
              <li className={styles.tag}>react js</li>
              <li className={styles.tag}>css</li>
              <li className={styles.tag}>javascript</li>
            </ul>
          </section>
          {/* <section className={styles.profile}>
            <div className={styles.image}>
              <Image
                className={styles.imageinner}
                height={60}
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
          </section> */}
        </div>
        <article>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use (injected humour and the
            like).
          </p>
          <h2>How to maximize rect js</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use (injected humour and the
            like).
          </p>
          <h2>How to maximize rect js</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use (injected humour and the
            like).
          </p>
        </article>
        <div className={styles.recommend}>
          <h5>Recommended post:</h5>
          <ul>
            <li>How to easily manipulate css code</li>
            <li>Mehine learning for nerds</li>
            <li>Did python really bacame the most popular language?</li>
            <li>How is Angular better than react js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
