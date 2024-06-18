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

  // const filters = {
  //   // this syntax explained - we don't want the key to exist if there is no value to it
  //   // code check if there is a value, if so, creates the key and value and the spread syntax assigns it as a key on the object
  //   // if there is no value then the key isnt created
  //   ...(router.query.status && { status: router.query.status }),
  //   ...(router.query.level && { level: router.query.level }),
  //   ...(router.query.project && { project: router.query.project }),
  // } as FilterType;

  const updateFilterQuery = (newFilter: {
    key: string;
    value: string | undefined;
  }) => {
    const { query } = router;
    const { key, value } = newFilter;

    // Create a new query object by spreading the current query
    const newQuery = { ...query };

    if (value) {
      newQuery[key] = value;
    } else {
      delete newQuery[key];
    }

    router.push({ query: newQuery });
  };

  return { filters, updateFilterQuery };
};
