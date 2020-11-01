import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    container: {},
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 20,
      width: '100%',
    },
    button: {
      backgroundColor: theme.themeColour1,
      color: theme.baseColour,
      display: 'flex',
      fontFamily: theme.baseFont,
      fontSize: theme.baseFontSize - 2,
      justifyContent: 'space-evenly',
      marginLeft: 2,
      padding: 7,
      width: 110,
    },
    sort: {
      height: 10,
      marginLeft: 2,
      width: 8,
    },
    photo: { display: 'none', height: 400, margin: 20, width: 300 },
    '@media (min-width: 480px)': {
      photo: { display: 'flex', height: 225, width: 180 },
      container: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
    '@media (min-width: 768px)': {
      buttons: {
        justifyContent: 'flex-end',
        width: '99%',
      },
      photo: {
        height: 450,
        width: 350,
      },
    },
  }),
  { name: 'main' }
);
