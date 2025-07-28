import React from 'react';
import { JSX } from 'react';
import {
  Field,
  ImageField,
  Link,
  LinkField,
  NextImage,
  RichText,
  RichTextField,
  Text,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Eyebrow: Field<string>;
  Text: RichTextField;
  Link: LinkField;
  Image1: ImageField;
  Title1: Field<string>;
  Text1: Field<string>;
  Title2: Field<string>;
  Text2: Field<string>;
}

export type FeaturesProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: FeaturesProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  return (
    <div className={`component features component-spaced ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="info">
          <div className="eyebrow-accent">
            <Text field={fields?.Eyebrow} />
          </div>
          <div className="tagline">
            <RichText field={fields?.Text} />
          </div>
          <div className="button button-main">
            <Link field={fields?.Link} />
          </div>
        </div>
        <div className="items">
          <div className="item left">
            <div className="icon">
              <NextImage field={fields?.Image1} width={32} height={32} />
            </div>
            <div className="title">
              <Text field={fields?.Title1} />
            </div>
            <p className="subtitle">
              <Text field={fields?.Text1} />
            </p>
          </div>
          <div className="item right">
            <div className="title">
              <Text field={fields?.Title2} />
            </div>
            <p className="subtitle">
              <Text field={fields?.Text2} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
