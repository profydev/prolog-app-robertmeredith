import classNames from "classnames";
import styles from "./checkbox.module.scss";
import { InputHTMLAttributes, useEffect, useRef } from "react";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

type CheckboxProps = {
  sz?: CheckboxSize;
  label?: string;
  indeterminate?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  sz = CheckboxSize.md,
  label,
  disabled,
  indeterminate,
  ...props
}: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      // check status of indeterminate prop, if null or indefined then set input ref as false
      inputRef.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);

  return (
    <label
      className={classNames(styles.container, disabled && styles.disabled)}
    >
      <div className={classNames(styles.checkbox, styles[sz])}>
        <input type="checkbox" {...props} disabled={disabled} ref={inputRef} />
        <span
          className={classNames(styles.status, disabled && styles.disabled)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/check.svg"
            alt="checkmark"
            className={styles.checkmark}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/minus.svg"
            alt="indeterminate mark"
            className={styles.minus}
          />
        </span>
      </div>
      {label && (
        <div className={classNames(styles.label, styles[sz])}>{label}</div>
      )}
    </label>
  );
};
