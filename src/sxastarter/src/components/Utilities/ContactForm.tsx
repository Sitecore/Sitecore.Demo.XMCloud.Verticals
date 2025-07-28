import React from 'react';
import { JSX } from 'react';
import { Field, ImageField, NextImage, Text } from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: Field<string>;
  EmailLabel: Field<string>;
  SubjectLabel: Field<string>;
  MessageLabel: Field<string>;
  ButtonLabel: Field<string>;
  BackgroundImage: ImageField;
}

export type ContactFormProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: ContactFormProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  return (
    <div className={`component contact-form component-spaced ${styles}`} id={id ? id : undefined}>
      <div className="container container-widest-fluid">
        <NextImage field={fields.BackgroundImage} className="img-fluid" width={1920} height={800} />
        <div className="container">
          <div className="contact-form-inner">
            <form>
              <h2 className="mb-4">
                <Text field={fields?.Title} />
              </h2>
              <input type="text" placeholder={fields.EmailLabel.value} />
              <input type="text" placeholder={fields.SubjectLabel.value} />
              <textarea placeholder={fields.MessageLabel.value} />
              <input
                type="submit"
                value={fields.ButtonLabel.value}
                className="button button-main mt-3"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
