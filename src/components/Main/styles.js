import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    container: {},
    buttons: {
      display: 'flex',
      justifyContent: 'center',
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
    photo: { display: 'none', height: 400, margin: 25, width: 300 },
  }),
  { name: 'main' }
);
