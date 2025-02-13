import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EntityIds } from '../../types';
import { IssuesSummary } from './IssuesSummary';
import { Issues } from './IssuesTable';

const PREFIX = 'IssuesView';

const classes = {
  container: `${PREFIX}-container`,
  summary: `${PREFIX}-summary`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },

  [`& .${classes.summary}`]: {
    '& .MuiCard-root': {
      marginBottom: 0,
    },
    '& .MuiCardContent-root': {
      padding: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(4),
    },
    '& .MuiCardHeader-root': {
      padding: theme.spacing(2),
    },
  },
}));

interface IssuesViewProps {
  entityIds: EntityIds;
}

export const IssuesView = ({ entityIds }: IssuesViewProps) => {
  return (
    <StyledBox className={classes.container}>
      <Box className={classes.summary}>
        <IssuesSummary entityIds={entityIds} />
      </Box>
      <Issues entityIds={entityIds} />
    </StyledBox>
  );
};
