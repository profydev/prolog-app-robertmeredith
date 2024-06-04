import { Button, ButtonSize, Select, Input } from "@features/ui";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import styles from "./issue-filter.module.scss";

const filterOneOptions = [
  { id: 1, label: "All", value: "all" },
  { id: 1, label: "Resolved", value: "resolved" },
  { id: 3, label: "Unresolved", value: "unresolved" },
];
const filterTwoOptions = [
  { id: 1, label: "All", value: "all" },
  { id: 1, label: "Error", value: "error" },
  { id: 3, label: "Warning", value: "warning" },
  { id: 4, label: "Info", value: "info" },
];

export const IssueFilter = () => {
  return (
    <div className={styles.filterBar}>
      <Button size={ButtonSize.lg}>
        <CheckIcon className={styles.icon} />
        Resolve Selected Issue
      </Button>
      <div className={styles.right}>
        <Select
          options={filterOneOptions}
          placeholder={"Status"}
          className={styles.filter}
        />
        <Select
          options={filterTwoOptions}
          placeholder={"Label"}
          className={styles.filter}
        />
        <Input className={styles.input} icon={MagnifyingGlassIcon} />
      </div>
    </div>
  );
};
