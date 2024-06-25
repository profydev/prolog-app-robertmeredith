import styles from "./testimonials.module.scss";
import { useGetContent, ContentPages } from "@hooks/use-get-content";

type TestimonialType = {
  title: string;
  text: string;
  userImage: {
    src: string;
  };
  userName: string;
  userRole: string;
  userCompany: string;
};

export const Testimonials = () => {
  const { data, isLoading, error, isError } = useGetContent(ContentPages.home);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  const content = data.sections[2];

  console.log(content);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{content.title}</h2>
        <div className={styles.subtitle}>{content.subtitle}</div>
      </div>
      <div className={styles.cardsContainer}>
        {content.testimonials.map(
          (testimonial: TestimonialType, index: number) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ),
        )}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  // console.log(testimonial.userImage.src.split(".")[0] + ".png");
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.textBlock}>
        <div className={styles.userTech}>{testimonial.title}</div>
        <div className={styles.userText}>{testimonial.text}</div>
      </div>
      <div className={styles.avatarBlock}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.img}
          src={testimonial.userImage.src.split(".")[0] + ".png"}
          alt="avatar"
        />
        <div className={styles.avatarTextBlock}>
          <div className={styles.userName}>{testimonial.userName}</div>
          <div
            className={styles.userRole}
          >{`${testimonial.userRole}, ${testimonial.userCompany}`}</div>
        </div>
      </div>
    </div>
  );
};
