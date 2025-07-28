import React from 'react';
import { JSX } from 'react';
import {
  Field,
  Link,
  LinkField,
  RichText,
  RichTextField,
  Text,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: Field<string>;
  Subtitle: RichTextField;
  FullName: Field<string>;
  IDNumber: Field<string>;
  Email: Field<string>;
  MobileNumber: Field<number>;
  Footnote: RichTextField;
  SubmitButton: LinkField;
}

export type ApplicationFormProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: ApplicationFormProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  return (
    <div className={`component application-form ${styles}`} id={id ? id : undefined}>
      <div className="application-form-inner">
        <div className="container">
          <div className="title">
            <Text field={fields?.Title} />
          </div>
          <div className="subtitle">
            <RichText field={fields?.Subtitle} />
          </div>
          <input
            className="input-field"
            defaultValue={fields?.FullName?.value}
            placeholder="First and Last name"
          />
          <input
            className="input-field"
            defaultValue={fields?.IDNumber?.value}
            placeholder="ID number"
          />
          <input className="input-field" defaultValue={fields?.Email?.value} placeholder="Email" />
          <input
            className="input-field"
            defaultValue={fields?.MobileNumber?.value}
            placeholder="Mobile number"
          />
          <div className="footnote">
            <RichText field={fields?.Footnote} />
          </div>
          <Link field={fields.SubmitButton} className="button button-main submit-button" />
        </div>
      </div>
    </div>
  );
};
