import { Typography } from '@mui/material';
import { format } from 'date-fns';

interface FormattedDateTimeProps {
  dateString: string | number | Date;
}

export const FormattedDateTime = ({ dateString }: FormattedDateTimeProps) => {
  const date = new Date(dateString);
  return (
    <Typography
      variant="subtitle1"
      component={'time'}
      dateTime={date.toISOString()}
      sx={{
        color: theme => theme.palette.text.primary,
        fontSize: 'small',
      }}
    >
      {format(date, 'MMM dd, yyyy, h:mm a')}
    </Typography>
  );
};
