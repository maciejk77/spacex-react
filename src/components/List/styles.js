import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    list: {
      margin: '5px 10px',
    },
    item: {
      borderRadius: 5,
      boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      listStyleType: 'none',
      marginBottom: 5,
      padding: 5,
    },
    indexName: {
      alignItems: 'center',
      display: 'flex',
      fontFamily: theme.baseFont,
      fontSize: theme.baseFontSize,
      lineHeight: 1.25,
      width: '75%',
    },
    dateRocket: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.baseFont,
      height: 25,
      justifyContent: 'space-between',
    },
    date: {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: theme.baseFontSize * 0.8,
    },
    rocket: {
      fontSize: theme.baseFontSize * 0.9,
    },
    '@media (min-width: 480px)': {
      dateRocket: { fontSize: theme.baseFontSize * 1.25 },
      indexName: { width: '50%', fontSize: theme.baseFontSize * 1.25 },
      list: { width: '100%' },
      dateRocket: { padding: 5, height: 40 },
      date: { fontSize: theme.baseFontSize * 1.25 },
      rocket: { fontSize: theme.baseFontSize * 1.25 },
    },
  }),
  { name: 'list' }
);
