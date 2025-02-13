export const VULNERABILITY_FINDINGS_QUERY = `
  query VulnerabilityFindingsPage($filterBy: VulnerabilityFindingFilters, $first: Int, $after: String, $orderBy: VulnerabilityFindingOrder) {
    vulnerabilityFindings(
      filterBy: $filterBy
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      totalCount
      nodes {
        id
        vulnerabilityExternalId
        portalUrl
        name
        CVSSSeverity
        hasExploit
        hasCisaKevExploit
        relatedIssueAnalytics {
          issueCount
          criticalSeverityCount
          highSeverityCount
          mediumSeverityCount
          lowSeverityCount
          informationalSeverityCount
        }
        status
        vendorSeverity
        firstDetectedAt
        lastDetectedAt
        fixedVersion
        vulnerableAsset {
          ... on VulnerableAssetBase {
            id
            type
            name
            providerUniqueId
          }
          ... on VulnerableAssetVirtualMachine {
            id
            type
            name
            providerUniqueId
          }
          ... on VulnerableAssetServerless {
            id
            type
            name
            providerUniqueId
          }
          ... on VulnerableAssetContainerImage {
            id
            type
            name
            providerUniqueId
          }
          ... on VulnerableAssetContainer {
            id
            type
            name
            providerUniqueId
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
