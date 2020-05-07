import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import { StateType } from '../entry';

type MapStateToPropsType = (state: StateType) => any
export default (mapStateToProps: MapStateToPropsType = () => ({})) => (Component) =>
  connect(
    mapStateToProps,
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    }),
  )(Component);
