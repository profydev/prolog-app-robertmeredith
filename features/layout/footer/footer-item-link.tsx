import Link from "next/link";
import styles from "./footer-item-link.module.scss";

type FooterItemProps = {
  text: string;
  href: string;
};

export function FooterItemLink({ text, href }: FooterItemProps) {
  return (
    <li className={styles.listItem}>
      <Link className={styles.anchor} href={href}>
        {text}
      </Link>
    </li>
  );
}
