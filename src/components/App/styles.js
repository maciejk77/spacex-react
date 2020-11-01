import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    app: {
      backgroundColor: theme.baseColour,
      margin: '0 auto',
      maxWidth: theme.maxWidth,
      minWidth: theme.minWidth,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: '15px 0 10px 10px',
    },
    logo: {
      alignItems: 'baseline',
      color: theme.baseColour1,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.baseFont,
      lineHeight: 1.25,
    },
    logoIcon: {
      height: 25,
      width: 190,
    },
    logoLabel: {
      fontSize: theme.baseFontSize,
    },
    reload: {
      alignItems: 'center',
      backgroundColor: theme.themeColour1,
      borderRadius: '25px 0 0 25px',
      color: theme.baseColour,
      display: 'flex',
      fontFamily: theme.baseFont,
      fontSize: theme.baseFontSize * 0.7,
      height: 15,
      padding: '5px 10px',
      width: 75,
    },
    reloadImage: { marginLeft: 5 },

    '@media (min-width: 480px)': {
      logo: { flexDirection: 'row' },
      logoLabel: { marginLeft: -20 },
    },
    '@media (min-width: 1024px)': {
      app: {
        marginTop: 20,
        border: '1px solid lightgray',
      },
    },
  }),
  { name: 'app' }
);
