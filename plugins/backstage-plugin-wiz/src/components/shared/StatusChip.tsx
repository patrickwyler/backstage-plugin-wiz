import { Chip, Theme } from '@mui/material';

interface StatusChipProps {
  status: string;
}

export const StatusChip = ({ status }: StatusChipProps) => {
  const statusLabel = (() => {
    switch (status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'RESOLVED':
        return 'Resolved';
      case 'REJECTED':
        return 'Ignored';
      default:
        return status;
    }
  })();

  const getStatusBackgroundColor = (theme: Theme) => {
    switch (status) {
      case 'OPEN':
        return theme.palette.info.main;
      case 'IN_PROGRESS':
        return theme.palette.warning.main;
      case 'RESOLVED':
        return theme.palette.success.main;
      case 'REJECTED':
        return theme.palette.error.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Chip
      label={statusLabel}
      size="small"
      sx={{
        backgroundColor: theme => getStatusBackgroundColor(theme),
        color: theme => theme.palette.common.white,
      }}
    />
  );
};
