import styles from "./error.module.scss";
import { Button } from "../button";

// const Icon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="20"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//     >
//       <g clip-path="url(#clip0_644_24409)">
//         <path
//           d="M10 6.66675V10.0001M10 13.3334H10.0084M18.3334 10.0001C18.3334 14.6025 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6025 1.66669 10.0001C1.66669 5.39771 5.39765 1.66675 10 1.66675C14.6024 1.66675 18.3334 5.39771 18.3334 10.0001Z"
//           stroke="#D92D20"
//           stroke-width="1.66667"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_644_24409">
//           <rect width="20" height="20" fill="white" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };

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
    <div className={styles.error}>
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
