import { Content, Page } from '@backstage/core-components';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EntityIds } from '../types';
import { IssuesView } from './issues/IssuesView';
import { VulnerabilitiesTable } from './vulnerabilities/VulnerabilitiesTable';

const PREFIX = 'Overview';

const classes = {
  root: `${PREFIX}-root`,
  issuesSection: `${PREFIX}-issuesSection`,
  container: `${PREFIX}-container`,
};

const StyledPage = styled(Page)(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },

  [`& .${classes.issuesSection}`]: {
    '& > *:first-child': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
}));

interface OverviewProps {
  entityIds: EntityIds;
}

export const Overview = ({ entityIds }: OverviewProps) => {
  return (
    <StyledPage themeId="service">
      <Content>
        <StyledBox className={classes.container}>
          <IssuesView entityIds={entityIds} />
          <VulnerabilitiesTable entityIds={entityIds} />
        </StyledBox>
      </Content>
    </StyledPage>
  );
};
