import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  commonLogo: {
    height: 'auto',
  },
  logo: {
    extend: 'commonLogo',
    width: '2rem',
  },
  contentLogo: {
    extend: 'commonLogo',
    width: '3rem',
  },
  card: {
    display: 'flex',
  },
}));
