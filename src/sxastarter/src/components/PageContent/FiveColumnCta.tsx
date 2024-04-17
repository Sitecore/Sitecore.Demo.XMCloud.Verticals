import React from 'react';
import { Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title1: Field<string>;
  Image1: ImageField;
  Title2: Field<string>;
  Image2: ImageField;
  Title3: Field<string>;
  Image3: ImageField;
  Title4: Field<string>;
  Image4: ImageField;
  Title5: Field<string>;
  Image5: ImageField;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`container component five-column-cta pb-5 ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="row row-cols-5">
        <div className="col">
          <Image field={props.fields.Image1} className="d-block w-100" height={' '}></Image>
        </div>
        <div className="col">
          <Image field={props.fields.Image2} className="d-block w-100" height={' '}></Image>
        </div>
        <div className="col">
          <Image field={props.fields.Image3} className="d-block w-100" height={' '}></Image>
        </div>
        <div className="col">
          <Image field={props.fields.Image4} className="d-block w-100" height={' '}></Image>
        </div>
        <div className="col">
          <Image field={props.fields.Image5} className="d-block w-100" height={' '}></Image>
        </div>
      </div>
    </div>
  );
};
