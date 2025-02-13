export const ISSUES_GROUPED_COUNT_QUERY = `
  query IssuesGroupedByValueTotalCount(
    $groupBy: IssuesGroupedByValueField!, 
    $filterBy: IssueFilters
  ) {
    issuesGroupedByValue(
      groupBy: $groupBy, 
      filterBy: $filterBy
    ) {
      totalCount
    }
  }
`;
