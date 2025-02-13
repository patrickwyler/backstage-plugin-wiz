export const ISSUES_QUERY = `
  query IssuesTable($filterBy: IssueFilters, $first: Int, $after: String, $orderBy: IssueOrder) {
    issues: issuesV2(filterBy: $filterBy, first: $first, after: $after, orderBy: $orderBy) {
      totalCount
      nodes {
        url
        id
        sourceRule {
          __typename
          ... on Control {
            id
            name
          }
          ... on CloudConfigurationRule {
            id
            name
          }
          ... on CloudEventRule {
            id
            name
          }
        }
        createdAt
        type
        status
        severity
        entitySnapshot {
          id
          type
          name
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
