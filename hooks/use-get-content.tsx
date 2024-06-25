import { useQuery } from "@tanstack/react-query";
import { getContent } from "@api/content";

const QUERY_KEY = "content";

// enum for the different content pages
export enum ContentPages {
  home = "home",
  pricing = "pricing",
  products = "products",
  documentation = "documentation",
}

export function useGetContent(slug: string) {
  const query = useQuery([QUERY_KEY, slug], () => getContent(slug));

  return query;
}
