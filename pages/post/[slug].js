import Image from "next/image";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import styles from "../../styles/post.module.css";
import sanityClient from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";

const configuredSanityClient = sanityClient({
  projectId: "7gx68era",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

const Index = ({ title, image, date, body, tags, description }) => {
  const imageProps = useNextSanityImage(configuredSanityClient, image);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
      </Head>
      <div className={styles.postwrapper}>
        <div>
          <Image
            className={styles.coverimage}
            {...imageProps}
            sizes="(max-width: 500px) 100vw, 500px"
            layout="responsive"
            alt="article cover"
          />
        </div>
        <h1>{title}</h1>

        <div className={styles.postmeta}>
          <section className={styles.date}>
            <p>{date}</p>
            <ul className={styles.taglist}>
              {tags.map((tag, key) => {
                return (
                  <li key={key} className={styles.tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <article className={styles.content}>
          <BlockContent
            blocks={body}
            dataset="production"
            projectId="7gx68era"
          />
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
};

export default Index;

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://7gx68era.api.sanity.io/v1/data/query/production?query=${query}`;
  const results = await fetch(url).then((res) => res.json());
  const post = results.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        image: post.mainImage,
        body: post.body,
        date: post._createdAt,
        tags: post.tags,
        description: post.description,
      },
    };
  }
};
