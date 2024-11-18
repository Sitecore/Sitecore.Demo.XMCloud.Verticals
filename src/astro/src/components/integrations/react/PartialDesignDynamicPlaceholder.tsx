import React from 'react';
import { Placeholder, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import ReactPlaceholder from './ReactPlaceholder';

type DynamicPlaceholderProps = {
  rendering: ComponentRendering;
};

const PartialDesignDynamicPlaceholder = (props: DynamicPlaceholderProps): JSX.Element => (
  <ReactPlaceholder name={props.rendering?.params?.sig || ''} rendering={props.rendering} />
);

export default PartialDesignDynamicPlaceholder;
