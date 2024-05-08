import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
}

export type ApplicationFormProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: ApplicationFormProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return (
    <div
      className={`component application-form ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <img src="/application_form.JPG" alt="temp" style={{ width: '100%' }} />
    </div>
  );
};
