import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIssues } from "@api/issues";
import type { Page } from "@typings/page.types";
import type { Issue } from "@api/issues.types";

type FilterType = {
  status?: string;
  level?: string;
  project?: string;
};

const QUERY_KEY = "issues";

// export function getQueryKey(page?: number) {
//   if (page === undefined) {
//     return [QUERY_KEY];
//   }
//   return [QUERY_KEY, page];
// }

export function getQueryKey(page?: number, filters?: FilterType) {
  const queryKey: (string | number)[] = [QUERY_KEY];

  if (page !== undefined) {
    queryKey.push(page);
  }

  if (filters?.level !== undefined) {
    queryKey.push(filters.level);
  }
  if (filters?.status !== undefined) {
    queryKey.push(filters.status);
  }
  if (filters?.project !== undefined) {
    queryKey.push(filters.project);
  }

  return queryKey;
}

// export function useGetIssues(page: number) {
//   const query = useQuery<Page<Issue>, Error>(
//     getQueryKey(page),
//     ({ signal }) => getIssues(page, { signal }),
//     { keepPreviousData: true },
//   );

export function useGetIssues(page: number, filters: FilterType) {
  const query = useQuery<Page<Issue>, Error>(
    getQueryKey(page, filters),
    ({ signal }) => getIssues(page, filters, { signal }),
    { keepPreviousData: true },
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      queryClient.prefetchQuery(getQueryKey(page + 1), ({ signal }) =>
        getIssues(page + 1, filters, { signal }),
      );
    }
  }, [query.data, page, filters, queryClient]);
  return query;
}
