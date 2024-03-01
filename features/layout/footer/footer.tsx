import styles from "./footer.module.scss";
import { FooterItemLink } from "./footer-item-link";
import { version } from "../../../package.json";

const menuItems = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Community", href: "#" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.linkList}>
            {menuItems.map((menuItem, index) => (
              <FooterItemLink key={index} {...menuItem} />
            ))}
          </ul>
        </nav>
        <div className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={"/icons/logo-small.svg"} alt="small logo" />
        </div>
        <div className={styles.version}>Version: {version}</div>
      </div>
    </footer>
  );
};
