import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

export default (mapStateToProps = () => ({})) => (Component) =>
  connect(
    mapStateToProps,
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    }),
  )(Component);
