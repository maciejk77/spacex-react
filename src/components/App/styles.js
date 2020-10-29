import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    app: {
      backgroundColor: theme.baseColour,
      margin: '0 auto',
      maxWidth: theme.maxWidth,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 5,
      padding: '0 20px',
    },
    logo: {
      alignItems: 'baseline',
      color: theme.baseColour1,
      display: 'flex',
      fontFamily: theme.baseFont,
      marginLeft: 25,
    },
    logoLabel: {},
    reload: {
      backgroundColor: theme.themeColour1,
      borderRadius: '25px 0 0 25px',
      color: theme.baseColour,
      padding: '10px 10px',
      fontFamily: theme.baseFont,
      fontSize: theme.baseFontSize,
    },
    reloadImage: { marginLeft: 5 },
  }),
  { name: 'app' }
);
