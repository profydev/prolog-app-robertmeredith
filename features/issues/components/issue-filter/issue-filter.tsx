import { Button, ButtonSize, Select, Input } from "@features/ui";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import styles from "./issue-filter.module.scss";
import { useFilters } from "../../api/use-filters";

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

type OptionType = {
  label: string;
  value: string;
};

export const IssueFilter = () => {
  const { filters, updateFilters } = useFilters();

  console.log("filters", filters);

  const handleStatusChange = (selected: OptionType) => {
    updateFilters({ status: selected.value });
  };

  const handleLabelChange = (selected: OptionType) => {
    updateFilters({ level: selected.value });
  };

  const handleSearch = (value: string) => {
    updateFilters({ project: value });
  };

  return (
    <div className={styles.filterBar}>
      <Button size={ButtonSize.lg}>
        <CheckIcon className={styles.icon} />
        Resolve Selected Issue
      </Button>
      <div className={styles.right}>
        <Select
          options={statusFilterOptions}
          placeholder={filters.status || "Status"}
          className={styles.filter}
          handleChange={handleStatusChange}
        />
        <Select
          options={levelFilterOptions}
          placeholder={filters.level || "Label"}
          className={styles.filter}
          handleChange={handleLabelChange}
        />
        <Input
          className={styles.input}
          icon={MagnifyingGlassIcon}
          value={filters.project || ""}
          // placeholder={filters.project || "Search"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
      </div>
    </div>
  );
};
