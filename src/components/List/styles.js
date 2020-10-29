import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    // list: { border: '1px solid blue' },
    item: {
      border: `1px solid ${theme.baseColour2}`,
      borderRadius: 3,
      boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.3)',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 5,
      listStyleType: 'none',
      padding: 10,
      minWidth: theme.minWidth,
    },
    indexName: {
      fontFamily: theme.baseFont,
      fontSize: theme.fontSize1,
    },
    date: {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: theme.fontSize1 / 1.5,
    },

    rocket: {
      fontSize: theme.fontSize1 / 1.25,
    },
  }),
  { name: 'list' }
);
