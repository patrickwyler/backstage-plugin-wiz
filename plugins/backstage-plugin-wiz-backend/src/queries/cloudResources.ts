export const CLOUD_RESOURCES_QUERY = `
  query CloudResourceSearch(
    $filterBy: CloudResourceFilters
    $first: Int
    $after: String
  ) {
    cloudResources(
      filterBy: $filterBy
      first: $first
      after: $after
    ) {
      nodes {
        id
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
