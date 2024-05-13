import React from 'react';
import {
  Field,
  ImageField,
  Image,
  RichTextField,
  Text,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
}

export type AppPromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: AppPromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component hero ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      <picture>
        <Image field={props.fields.Image} className=""></Image>
      </picture>
      <div className="container content-container">
        <div className="top-layout">
          <div className="title">
            <Text field={props.fields.Title} encode={false} />
          </div>
          <div className="subtitle">
            <RichText field={props.fields.Text} />
          </div>
        </div>
        <div className="bottom-layout">
          <div className="btn-array">
            <a href="#" className="button" title="">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
