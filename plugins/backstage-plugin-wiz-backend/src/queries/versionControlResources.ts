export const VERSION_CONTROL_RESOURCES_QUERY = `
  query VersionControlResources($first: Int, $after: String, $filterBy: VersionControlResourceFilters) {
    versionControlResources(first: $first, after: $after, filterBy: $filterBy) {
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
