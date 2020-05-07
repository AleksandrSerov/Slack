import { withTranslation } from 'react-i18next';
type WithTranslationDecoratorType = () => (c: any) => any;
const withTranslationDecorator: WithTranslationDecoratorType = () => (
  Component,
) => withTranslation()(Component);
export default withTranslationDecorator;
