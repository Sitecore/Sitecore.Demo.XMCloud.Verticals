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
import { ParallaxBackgroundImage } from 'components/NonSitecore/ParallaxBackgroundImage';

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
      <ParallaxBackgroundImage BackgroundImage={props.fields.BackgroundImage} />

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
                    <Text field={props.fields.Position} />
                  </p>
                  <hr />
                  <div className="author-bio">
                    <RichText field={props.fields.Bio} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <Placeholder name="background-page-content" rendering={props.rendering} />
            </div>
          </div>
        </div>
        <Placeholder name="page-content" rendering={props.rendering} />
      </div>
    </div>
  );
};

export const Simple = (props: PageBackgroundProps): JSX.Element => {
  const id = props.params?.RenderingIdentifier;
  return (
    <div
      className={`component author-details-simple col-12 ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container container-wide">
        <div className="row g-5">
          <div className="text-col col-lg-8">
            <h6 className="eyebrow-accent">
              <Text field={props.fields.Position} />
            </h6>
            <h1 className="display-2 fw-bold">
              <Text field={props.fields.Name} />
            </h1>

            <div className="rich-content mb-4">
              <RichText field={props.fields.Bio} />
            </div>
          </div>
          <div className="img-col col-lg-4">
            <Image field={props.fields.Photo} className="author-img img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
