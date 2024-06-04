import { PageContainer } from "@features/layout";
import { IssueList, IssueFilter } from "@features/issues";
import type { NextPage } from "next";

const IssuesPage: NextPage = () => {
  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueFilter />
      <IssueList />
    </PageContainer>
  );
};

export default IssuesPage;
