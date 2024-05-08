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

export type PromoCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: PromoCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component promo-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container col-xl-12 py-5">
        <div className="row content align-items-center g-lg-5">
          <div className="col-lg-6 text-center text-lg-start ">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              <Text field={props.fields.Title} />
            </h1>
            <div className="col-lg-10 fs-4 ">
              <RichText field={props.fields.Text} />
            </div>
          </div>
          <div className="col-md-10 mx-0 px-0 col-lg-6 image-wrapper">
            <Image field={props.fields.Image} className="d-block mx-lg-auto img-fluid"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
