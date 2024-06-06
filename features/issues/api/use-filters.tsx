import { useRouter } from "next/router";

type FilterType = {
  status?: string;
  level?: string;
  project?: string;
};

export const useFilters = () => {
  const router = useRouter();

  const filters = {
    status: router.query.status,
    level: router.query.level,
    project: router.query.project,
  } as FilterType;

  const updateFilters = (newFilters: FilterType) => {
    const query = { ...router.query, ...newFilters };
    router.push({ query });
  };

  return { filters, updateFilters };
};
