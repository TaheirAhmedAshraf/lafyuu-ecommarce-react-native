export const setTheme = theme => {
  return {
    type: 'SET_THEME',
    payload: theme,
  };
};

export const setUser = user => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};
