import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    flex: {
      display: 'flex',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '0 50px',
    },
    button: {
      backgroundColor: theme.themeColour1,
      color: theme.baseColour,
      display: 'flex',
      fontFamily: theme.baseFont,
      fontSize: theme.baseFontSize,
      justifyContent: 'space-between',
      padding: 7,
      width: 115,
    },
    sort: {
      height: 12,
      marginLeft: 5,
      width: 10,
    },
    photo: { margin: 25 },
  }),
  { name: 'main' }
);
