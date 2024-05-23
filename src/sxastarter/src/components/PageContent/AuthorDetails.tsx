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
      className={`component article-details page-background spaced-top col-12 ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <Image field={props.fields.BackgroundImage} className="background-image"></Image>

      <div className="container">
        <Placeholder name="page-navigation" rendering={props.rendering} />
      </div>

      <div>
        <div className="background-content component-spaced container rounded-corners">
          <div className="p-3 p-sm-5">
            <div className="article-content">
              <div className="row row-gap-4 gx-5">
                <div className="author-card row g-0">
                  <div className="col-auto">
                    <Image field={props.fields.Photo} />
                  </div>
                  <div className="col">
                    <h6 className="author-name">
                      <Text field={props.fields.Name} />
                    </h6>
                    <p className="author-position">
                      <RichText field={props.fields.Bio} />
                    </p>
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
