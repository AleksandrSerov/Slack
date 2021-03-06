import { reduxForm } from 'redux-form';

export default (formName) => (Component) =>
  reduxForm({
    form: formName,
  })(Component);
