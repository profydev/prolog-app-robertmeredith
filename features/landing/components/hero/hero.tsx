import styles from "./hero.module.scss";
import { useGetContent, ContentPages } from "@hooks/use-get-content";

// type ContentType = {
//   title: string;
//   description: string;
//   image: {
//     height: number;
//     width: number;
//     src: string;
//   }
// };

export const Hero = () => {
  const { data, isLoading, error, isError } = useGetContent(ContentPages.home);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }
  console.log(data.sections[0]);

  const { title, subtitle, image } = data.sections[0];

  return (
    <div className={styles.hero}>
      {/* <div className={styles.heroSection}> */}
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h1 className={styles.subtitle}>{subtitle}</h1>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageContent}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt="macbook pro" className={styles.heroImage} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
