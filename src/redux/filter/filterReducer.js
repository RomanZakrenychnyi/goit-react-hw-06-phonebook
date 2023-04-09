const filterReducer = (state = '', action) => {
  if (action.type === 'filter/handler') {
    return (state = action.payload);
  }
  return state;
};

export default filterReducer;
