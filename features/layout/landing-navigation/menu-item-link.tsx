import Link from "next/link";
import React from "react";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  text: string;
  href: string;
};

export function MenuItemLink({ text, href }: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem)}>
      <Link className={styles.anchor} href={href}>
        {text}
      </Link>
    </li>
  );
}
