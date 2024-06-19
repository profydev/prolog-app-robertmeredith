import { useRouter } from "next/router";
import { ProjectLanguage } from "@api/projects.types";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import styles from "./issue-list.module.scss";
// import { useFilters } from "../../api/use-filters";
import { Loading, Error } from "@features/ui";
import { IssueFilter } from "../issue-filter";

export function IssueList() {
  const router = useRouter();
  const page = Number(router.query.page || 1);

  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });

  // Fetch Data
  const issuesPage = useGetIssues(page);
  const projects = useGetProjects();

  if (projects.isLoading || issuesPage.isLoading) {
    return <Loading />;
  }

  if (projects.isError) {
    console.error(projects.error);
    // return <div>Error loading projects: {projects.error.message}</div>;
    return (
      <>
        <Error error={projects.error.message} handleClick={projects.refetch} />
      </>
    );
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    // return <div>Error loading issues: {issuesPage.error.message}</div>;
    return (
      <>
        <Error
          error={issuesPage.error.message}
          handleClick={issuesPage.refetch}
        />
      </>
    );
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>,
  );

  const { items, meta } = issuesPage.data || {};

  // Redirect to last page if current page is greater than total pages
  if (meta?.currentPage > meta?.totalPages) {
    navigateToPage(meta.totalPages > 0 ? meta.totalPages : 1);
  }

  return (
    <div>
      <IssueFilter />
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}>Issue</th>
              <th className={styles.headerCell}>Level</th>
              <th className={styles.headerCell}>Events</th>
              <th className={styles.headerCell}>Users</th>
            </tr>
          </thead>
          <tbody>
            {(items || []).map((issue) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                projectLanguage={projectIdToLanguage[issue.projectId]}
              />
            ))}
          </tbody>
        </table>
        <div className={styles.paginationContainer}>
          <div>
            <button
              className={styles.paginationButton}
              onClick={() => navigateToPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className={styles.paginationButton}
              onClick={() => navigateToPage(page + 1)}
              disabled={page === meta?.totalPages}
            >
              Next
            </button>
          </div>
          <div className={styles.pageInfo}>
            Page <span className={styles.pageNumber}>{meta?.currentPage}</span>{" "}
            of <span className={styles.pageNumber}>{meta?.totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
