export default theme => ({
  '@global': {
    body: {
      fontFamily: "'Source Sans Pro', sans-serif",
      background: theme.colors.darkGray
    },
    '#header': {
      position: 'absolute',
      top: 0,
      left: 0
    }
  },
  viewport: {
    padding: '0px 0px 117px 117px',
    marginTop: theme.headerHeight + 44
  }
});