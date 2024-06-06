import { axios } from "./axios";
import type { Issue } from "./issues.types";
import type { Page } from "@typings/page.types";

const ENDPOINT = "/issue";

type FilterType = {
  status?: string;
  level?: string;
  project?: string;
};

export async function getIssues(
  page: number,
  filters: FilterType,
  options?: { signal?: AbortSignal },
) {
  const { data } = await axios.get<Page<Issue>>(ENDPOINT, {
    params: { page, ...filters },
    signal: options?.signal,
  });
  return data;
}
