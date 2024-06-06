import {
  Input as HeadlessInput,
  Label,
  Description,
  Field,
} from "@headlessui/react";
import styles from "./input.module.scss";
import classNames from "classnames";
import { createElement } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

// Derive prop types from HeadlessInput to ensure compatibility
type HeadlessInputProps = React.ComponentProps<typeof HeadlessInput>;

type InputProps = {
  hint?: string;
  label?: string;
  fullWidth?: boolean;
  error?: string | boolean;
  placeholder?: string;
  icon?: React.ElementType | string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & HeadlessInputProps; // Use derived types

export const Input = ({
  hint,
  label,
  fullWidth = false,
  icon,
  error = false,
  onChange,
  className,
  ...props
}: InputProps) => {
  // Function to render the icon based on the type of `icon` prop
  const renderIcon = () => {
    if (!icon) return null; // If no icon, return nothing
    if (typeof icon === "string") {
      return (
        // If icon is a string, treat it as an image path
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon}
          className={classNames(styles.icon, styles.left)}
          alt="list item icon"
        />
      );
    } else {
      // If icon is a component, render it
      // return createElement(icon, { className: styles.icon });
      return createElement(icon, {
        className: classNames(styles.icon, styles.left),
      });
    }
  };

  return (
    <Field
      className={classNames(
        styles.container,
        className,
        fullWidth && styles.fullWidth,
      )}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <div className={styles.inputContainer}>
        {/* Left Icon Render */}
        {renderIcon()}
        {/* Input */}
        <HeadlessInput
          onChange={onChange}
          className={classNames(
            styles.input,
            error && styles.error,
            icon && styles.hasIcon,
          )}
          {...props}
        />
        {error && (
          <ExclamationCircleIcon
            className={classNames(styles.icon, styles.right)}
          />
        )}
      </div>
      {/* Hint */}
      <Description
        className={classNames(
          styles.hint,
          typeof error === "string" && styles.error,
          !(hint || typeof error === "string") && styles.hidden,
        )}
      >
        {typeof error === "string" ? error : hint}
      </Description>
    </Field>
  );
};
