import { useRouter } from "next/router";
import { useState } from "react";
import { Routes } from "@config/routes";
import classNames from "classnames";
import { MenuItemLink } from "./menu-item-link";
import { Button, ButtonSize, UnstyledButton } from "@features/ui";
import styles from "./landing-navigation.module.scss";

const menuItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentation", href: Routes.documentation },
  { text: "Pricing", href: Routes.pricing },
];

export function LandingNavigation() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // CONTAINER
    <div className={classNames(styles.container)}>
      {/* HEADER */}
      <header className={styles.header}>
        {/* LOGO */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className={styles.logoContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"/icons/logo-large.svg"}
            alt="logo"
            className={classNames(styles.logo)}
          />
        </div>
        {/* MAIN NAV */}
        <nav className={styles.mainNav}>
          <ul className={styles.linkList}>
            {menuItems.map((menuItem, index) => (
              <MenuItemLink key={index} {...menuItem} />
            ))}
          </ul>
        </nav>
        {/* HEADER BUTTON */}
        <div className={styles.buttonContainer}>
          <Button
            className={styles.headerButton}
            size={ButtonSize.lg}
            onClick={() => router.push(Routes.projects)}
          >
            Open Dashboard
          </Button>
        </div>

        {/* MOBILE MENU OPEN BUTTON */}
        <UnstyledButton
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.showMenuButton}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isMobileMenuOpen ? "/icons/close-2.svg" : "/icons/menu-2.svg"}
            alt={isMobileMenuOpen ? "close menu" : "open menu"}
            className={styles.menuIcon}
          />
        </UnstyledButton>
      </header>
      <div
        className={classNames(
          styles.menuOverlay,
          isMobileMenuOpen && styles.isMobileMenuOpen,
        )}
      />

      {/* Mobile Side Nav */}
      <nav
        className={classNames(
          styles.mobileNav,
          isMobileMenuOpen && styles.isMobileMenuOpen,
        )}
      >
        <ul className={styles.linkList}>
          {menuItems.map((menuItem, index) => (
            <MenuItemLink key={index} {...menuItem} />
          ))}
        </ul>
        <Button
          size={ButtonSize.lg}
          onClick={() => router.push(Routes.projects)}
        >
          Open Dashboard
        </Button>
      </nav>
    </div>
  );
}
