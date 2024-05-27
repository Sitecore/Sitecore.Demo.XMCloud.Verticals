import React from 'react';
import {
  Field,
  ImageField,
  Placeholder,
  Text,
  Image,
  RichText,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  Name: Field<string>;
  Position: Field<string>;
  Photo: ImageField;
  Bio: RichTextField;
  BackgroundImage: ImageField;
}

export type PageBackgroundProps = ComponentProps & {
  fields: Fields;
};

export const Default = (props: PageBackgroundProps): JSX.Element => {
  const id = props.params?.RenderingIdentifier;
  return (
    <div
      className={`component author-details page-background col-12 ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <Image field={props.fields.BackgroundImage} className="background-image"></Image>

      <div className="container">
        <Placeholder name="page-navigation" rendering={props.rendering} />
      </div>

      <div>
        <div className="background-content component-spaced container rounded-corners">
          <div className="p-3 p-sm-5">
            <div className="">
              <div className="row row-gap-4 gx-5">
                <div className="col-12 col-lg-5">
                  <Image field={props.fields.Photo} className="author-img" />
                </div>
                <div className="col-12 col-lg-7">
                  <h1 className="author-name display-5 fw-bold">
                    <Text field={props.fields.Name} />
                  </h1>
                  <p className="author-position fs-4">
                    <RichText field={props.fields.Position} />
                  </p>
                  <hr />
                  <div className="author-bio">
                    <RichText field={props.fields.Bio} />
                  </div>
                </div>
              </div>
            </div>

            <Placeholder name="background-page-content" rendering={props.rendering} />
          </div>
        </div>
        <Placeholder name="page-content" rendering={props.rendering} />
      </div>
    </div>
  );
};
