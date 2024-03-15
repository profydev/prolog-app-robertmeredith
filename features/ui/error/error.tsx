import styles from "./error.module.scss";
import { Button } from "../button";

type ErrorProps = {
  error: string;
  supporting?: string;
  handleClick?: () => void;
};

export const Error = ({
  error = "There was an error",
  supporting,
  handleClick,
}: ErrorProps) => {
  return (
    <div className={styles.error} id="error">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="./icons/alert-circle.svg" alt="" className={styles.icon} />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.message}>{error}</div>
          {supporting && <div className={styles.supporting}>{supporting}</div>}
        </div>
        <Button className={styles.actions} onClick={handleClick}>
          Try again <img src="./icons/arrow-right.svg" alt="" />
        </Button>
      </div>
    </div>
  );
};
