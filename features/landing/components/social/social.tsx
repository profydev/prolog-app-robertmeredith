import styles from "./social.module.scss";
import { useGetContent, ContentPages } from "@hooks/use-get-content";

type CompanyType = {
  name: string;
  logo: string;
};

export const Social = () => {
  const { data, isLoading, error, isError } = useGetContent(ContentPages.home);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  const content = data.sections[1];

  return (
    <section className={styles.social}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>{content.title}</div>
        <div className={styles.logoContainer}>
          {content.companies.map((company: CompanyType, index: number) => (
            <div key={index} className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.icon}
                src={company.logo}
                alt={`${company.name} logo`}
              />
              <div className={styles.logoText}>{company.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
