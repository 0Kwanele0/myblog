import styles from "../styles/card.module.css";
import { useRouter } from "next/dist/client/router";

function PostCard({ item }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/post/${item.slug.current}`)}
      className={styles.card}
    >
      <img src={item.mainImage} alt="article cover" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <ul className={styles.taglist}>
        {item.tags.map((tag, key) => {
          return (
            <li className={styles.tag} key={key}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostCard;
