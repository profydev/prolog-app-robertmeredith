import { Button, ButtonSize, Select, Input } from "@features/ui";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import styles from "./issue-filter.module.scss";
import { useFilters } from "../../api/use-filters";

// type OptionType = {
//   label: string;
//   value: string;
// };

const statusFilterOptions = [
  { label: "All", value: "" },
  { label: "Resolved", value: "resolved" },
  { label: "Unresolved", value: "open" },
];
const levelFilterOptions = [
  { label: "All", value: "" },
  { label: "Error", value: "error" },
  { label: "Warning", value: "warning" },
  { label: "Info", value: "info" },
];

export const IssueFilter = () => {
  const { filters, updateFilterQuery } = useFilters();

  const updateFilter = (key: string, value: string | undefined) => {
    updateFilterQuery({
      key,
      value,
    });
  };

  const levelValue = levelFilterOptions.find(
    (op) => op.value === filters.level,
  );
  const statusValue = statusFilterOptions.find(
    (op) => op.value === filters.status,
  );

  console.log("levelValue", levelValue);
  console.log("statusValue", statusValue);

  return (
    <div className={styles.filterBar}>
      <Button size={ButtonSize.lg}>
        <CheckIcon className={styles.icon} />
        Resolve Selected Issues
      </Button>
      <div className={styles.right}>
        <Select
          options={statusFilterOptions}
          // placeholder={filters.status || "Status"}
          placeholder={"Status"}
          className={styles.filter}
          handleChange={(s) => updateFilter("status", s.value)}
          // defaultValue={levelValue}
        />
        <Select
          options={levelFilterOptions}
          // placeholder={filters.level || "Label"}
          placeholder={"Level"}
          className={styles.filter}
          // handleChange={handleLabelChange}
          handleChange={(s) => updateFilter("level", s.value)}
        />
        <Input
          className={styles.input}
          icon={MagnifyingGlassIcon}
          value={filters.project || ""}
          // placeholder={filters.project || "Search"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFilter("project", e.target.value)
          }
        />
      </div>
    </div>
  );
};
