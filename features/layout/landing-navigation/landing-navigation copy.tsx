import { Routes } from "@config/routes";
import styles from "./landing-navigation.module.scss";
import { Button, ButtonSize } from "@features/ui";
import { useRouter } from "next/router";
import { MenuItemLink } from "./menu-item-link";
import { UnstyledButton } from "@features/ui";

const menuItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentation", href: Routes.documentation },
  { text: "Pricing", href: Routes.pricing },
];

export const LandingNavigation = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className={styles.logoContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.logo}
            src="/icons/logo-large.svg"
            alt="Prolog logo"
          />
        </div>
        <nav className={styles.landingNav}>
          <ul>
            {menuItems.map((item, index) => (
              <MenuItemLink key={index} text={item.text} href={item.href} />
            ))}
          </ul>
        </nav>
        {/* Mobile Hamburger Button */}
        <UnstyledButton className={styles.hamburger}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./icons/menu-2.svg" alt="" />
        </UnstyledButton>

        {/* Dashboard Button */}
        <div className={styles.buttonContainer}>
          <Button
            size={ButtonSize.lg}
            onClick={() => router.push(Routes.projects)}
          >
            Open Dashboard
          </Button>
        </div>
      </div>
    </header>
  );
};
