import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import ImageUrlBuilder from "@sanity/image-url";
import PostCard from "../components/PostCard";

export default function Home({ post }) {
  const [mappedPost, setmappedPost] = useState([]);
  useEffect(() => {
    if (post.length) {
      const imgBuilder = ImageUrlBuilder({
        projectId: "7gx68era",
        dataset: "production",
        apiVersion: "2021-10-21",
        useCdn: true,
      });

      setmappedPost(
        post.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage),
          };
        })
      );
    }
  }, [post]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Learn web development</title>
        <meta
          name="description"
          content="Learn web development, from front end to back end. Includes articles about React.js, Next.js, Javascript and other web development technologies."
        />
        <meta
          name="google-site-verification"
          content="EKVY-rDNrqX8fuyn4tbbrxBN8ibIevmX7nxiNMcQcHc"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {mappedPost.length ? (
            mappedPost.map((item, key) => {
              return <PostCard key={key} item={item} />;
            })
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://7gx68era.api.sanity.io/v1/data/query/production?query=${query}`;
  const results = await fetch(url).then((res) => res.json());
  const post = await results.result;

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post,
      },
    };
  }
};
