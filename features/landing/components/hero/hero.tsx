import styles from "./hero.module.scss";
import { useGetContent, ContentPages } from "@hooks/use-get-content";
import { Loading, Error } from "@features/ui";

export const Hero = () => {
  const { data, isLoading, error, isError } = useGetContent(ContentPages.home);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  const { title, subtitle, image } = data.sections[0];

  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} alt="macbook pro" className={styles.heroImage} />
      </div>
    </section>
  );
};
