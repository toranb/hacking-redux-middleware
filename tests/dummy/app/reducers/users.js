var id = 2;

const initialState = {
  all: [
    {id: 1, name: 'one'},
    {id: 2, name: 'two'}
  ]
};

export default ((state, action) => {
  if (action.type === 'more') {
    id = id + 1;
    return Object.assign({}, state, {
      all: state.all.concat({id: id, name: 'more'})
    });
  }
  return state || initialState;
});