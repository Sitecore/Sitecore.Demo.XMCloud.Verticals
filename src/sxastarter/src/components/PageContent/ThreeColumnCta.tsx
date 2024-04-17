import React from 'react';
import { Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title1: Field<string>;
  Image1: ImageField;
  Title2: Field<string>;
  Image2: ImageField;
  Title3: Field<string>;
  Image3: ImageField;
}

export type ThreeColumnCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: ThreeColumnCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`container component four-column-cta pb-5 ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Image field={props.fields.Image1} className="d-block w-100" height={' '}></Image>
        </div>
        <div className="col-sm-12 col-md-4">
          <Image field={props.fields.Image2} className="d-block w-100" height={' '}></Image>
        </div>
        <div className="col-sm-12 col-md-4">
          <Image field={props.fields.Image3} className="d-block w-100" height={' '}></Image>
        </div>
      </div>
    </div>
  );
};
