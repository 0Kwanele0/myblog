import BlockContent from "@sanity/block-content-to-react";
import Img from "next/image";
import mystyle from "../../styles/category.module.css";
import sanityClient from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";

const configuredSanityClient = sanityClient({
  projectId: "7gx68era",
  dataset: "production",
  apiVersion: "2021-10-21",

  useCdn: true,
});

const Post = ({ title, image, body, tags }) => {
  const imageProps = useNextSanityImage(configuredSanityClient, image);

  return (
    <div className={mystyle.container}>
      <h1>{title}</h1>
      <Img
        {...imageProps}
        layout="responsive"
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <div>
        <ul>
          {tags.map((item, key) => {
            return (
              <li key={key}>
                {item._key == "c87c1146649d" ? "JavaScript" : "nop"}
              </li>
            );
          })}
        </ul>
        <BlockContent blocks={body} dataset="production" projectId="7gx68era" />
      </div>
    </div>
  );
};

export default Post;

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
        tags: post.categories,
      },
    };
  }
};
