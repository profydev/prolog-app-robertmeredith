import classNames from "classnames";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Label,
  Field,
  Description,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import styles from "./select.module.scss";
import { createElement } from "react";

type OptionType = {
  id: number;
  label: string;
  value: string | number;
};

type SelectProps = {
  label?: string;
  hint?: string;
  error?: string;
  options: OptionType[];
  icon?: React.ElementType | string;
  placeholder?: string;
  onChange?: (selected: OptionType | null) => void;
} & React.HTMLProps<HTMLSelectElement>;

export const Select = ({
  label,
  hint,
  error,
  disabled,
  placeholder = "Select",
  icon,
  options,
  onChange,
  className,
}: SelectProps) => {
  const [selected, setSelected] = useState<OptionType>();

  // Function to handle selection change
  const handleChange = (value: OptionType) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  // Function to render the icon based on the type of `icon` prop
  const renderIcon = () => {
    if (!icon) return null; // If no icon, return nothing
    if (typeof icon === "string") {
      // If icon is a string, treat it as an image path
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={icon} className={styles.icon} alt="list item icon" />;
    } else {
      // If icon is a component, render it
      return createElement(icon, { className: styles.icon });
    }
  };

  return (
    <Field className={classNames(styles.field, className)}>
      {/* Label */}
      {label && <Label className={styles.label}>{label}</Label>}
      {/* Listbox  */}
      <Listbox value={selected} onChange={handleChange}>
        {/* Listbox Button */}
        {({ open }) => (
          <>
            <ListboxButton
              className={classNames(
                styles.button,
                open && styles.buttonOpen,
                error && styles.error,
              )}
              disabled={disabled}
            >
              {renderIcon()}
              {selected ? (
                <span>{selected.label}</span>
              ) : (
                <span className={styles.placeholder}>{placeholder}</span>
              )}
              <ChevronDownIcon
                aria-hidden="true"
                className={classNames(styles.icon, styles.right)}
              />
            </ListboxButton>
            {/* Dropdown Options */}
            <ListboxOptions anchor="bottom" className={styles.options}>
              {options &&
                options.map((option) => (
                  <ListboxOption
                    key={option.id}
                    value={option}
                    className={classNames(styles.option)}
                  >
                    <div>{option.label}</div>
                    {selected === option && (
                      <CheckIcon className={styles.icon} />
                    )}
                  </ListboxOption>
                ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
      {/* Hint */}
      {error || hint ? (
        <Description className={classNames(styles.hint, error && styles.error)}>
          {error ? error : hint}
        </Description>
      ) : null}
    </Field>
  );
};
