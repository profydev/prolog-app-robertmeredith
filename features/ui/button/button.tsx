import { UnstyledButton } from "./unstyled-button";
import classNames from "classnames";
import styles from "./button.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  error = "error",
}

type ButtonProps = {
  size?: ButtonSize;
  color?: ButtonColor;
  iconOnly?: boolean;
  empty?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = ButtonSize.sm,
  color = ButtonColor.primary,
  iconOnly = false,
  empty = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <UnstyledButton
      {...props}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        iconOnly && styles.iconOnly,
        empty && styles.empty,
        className,
      )}
    >
      {children}
    </UnstyledButton>
  );
};
