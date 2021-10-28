import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import styles from "../../styles/post.module.css";
import { useState, useEffect } from "react";
import ImageUrlBuilder from "@sanity/image-url";

const Index = ({ post }) => {
  const [fixedImage, setfixedImage] = useState();
  useEffect(() => {
    const imgBuilder = ImageUrlBuilder({
      projectId: "7gx68era",
      dataset: "production",
      apiVersion: "2021-10-21",
      useCdn: true,
    });

    setfixedImage(imgBuilder.image(post.mainImage));
  }, [post]);

  return (
    <div>
      {post && (
        <div className={styles.container}>
          <Head>
            <title>{post.title}</title>
            <meta name="description" content={`${post.description}`} />
          </Head>
          <div className={styles.postwrapper}>
            <div>
              <img
                className={styles.coverimage}
                src={fixedImage}
                alt="article cover"
              />
            </div>
            <h1>{post.title}</h1>
            <div className={styles.postmeta}>
              <section className={styles.date}>
                <p>{post._createdAt}</p>
                <ul className={styles.taglist}>
                  {post.tags &&
                    post.tags.map((tag, key) => {
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
                blocks={post.body}
                dataset="production"
                projectId="7gx68era"
              />
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

export const getStaticProps = async (context) => {
  const pageSlug = context.params.slug;

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
        post,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://7gx68era.api.sanity.io/v1/data/query/production?query=${query}`;
  const results = await fetch(url).then((res) => res.json());
  const post = results.result;

  const paths = post.map((item) => ({
    params: {
      slug: item.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
