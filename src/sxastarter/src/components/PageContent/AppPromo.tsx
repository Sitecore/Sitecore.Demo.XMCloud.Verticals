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
    <div
      className={`component app-promo ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container col-xl-12 pt-5">
        <div className="row align-items-center g-lg-5 pt-5">
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
