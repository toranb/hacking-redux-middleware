var id = 2;

const initialState = {
  all: [
    {id: 1, name: 'one1'},
    {id: 2, name: 'two2'}
  ]
};

export default ((state, action) => {
  if (action.type === 'MORE') {
    id = id + 1;
    return Object.assign({}, state, {
      all: state.all.concat({id: id, name: 'MORE'})
    });
  }
  return state || initialState;
});
