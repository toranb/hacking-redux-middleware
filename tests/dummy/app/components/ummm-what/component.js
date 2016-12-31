import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

const stateToComputed = (state) => {
  return {
    users: state.users.all
  };
};

const dispatchToActions = (dispatch) => {
  return {
    more: () => dispatch({type: 'more'})
  };
};

const MyComponent = Ember.Component.extend({
  layout: hbs`
    {{yield users (action "more")}}
  `
});

export default connect(stateToComputed, dispatchToActions)(MyComponent);
