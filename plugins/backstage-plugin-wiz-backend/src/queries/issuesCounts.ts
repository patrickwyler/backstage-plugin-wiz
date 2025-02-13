export const ISSUES_SEVERITY_COUNTS_QUERY = `
  query IssuesSeverityCounts(
    $filterBy: IssueFilters, 
    $filterScope: IssueFiltersScope, 
    $first: Int, 
    $after: String, 
    $orderBy: IssueOrder
  ) {   
    issues: issuesV2(     
      filterBy: $filterBy     
      filterScope: $filterScope     
      first: $first     
      after: $after     
      orderBy: $orderBy   
    ) {     
      ...IssueCounts   
    } 
  }          

  fragment IssueCounts on IssueConnection {   
    totalCount   
    criticalSeverityCount   
    highSeverityCount   
    mediumSeverityCount   
    lowSeverityCount   
    informationalSeverityCount 
  }
`;
