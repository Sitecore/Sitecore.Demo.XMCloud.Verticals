import { Meta } from '@storybook/react';

import { Default as RichText } from '../components/RichText';

export default {
  title: 'Components/RichText',
  component: RichText,
} as Meta<typeof RichText>;

export const Default = {
  args: {
    fields: {
      Text: {
        value: 'This is a sample Rich Text component',
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
    params: {
      RenderingIdentifier: 'RichText',
      styles: 'test',
    },
  },
};
