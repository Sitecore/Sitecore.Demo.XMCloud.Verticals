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
  Title: Field<string>;
  Excerpt: Field<string>;
  Content: RichTextField;
  Thumbnail: ImageField;
  BackgroundImage: ImageField;
  Name: Field<string>;
  Photo: ImageField;
  Position: Field<string>;
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

        <h1 className="display-6 fw-bold">
          <Text field={props.fields.Title}></Text>
        </h1>
      </div>

      <div>
        <div className="background-content component-spaced container rounded-corners">
          <div className="p-3 p-sm-5">
            <div className="article-content">
              <div className="row row-gap-4 gx-5">
                <div className="col-12 col-lg-6">
                  <Image field={props.fields.Thumbnail} className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="author-card row g-0">
                    <div className="col-auto">
                      <Image field={props.fields.Photo} />
                    </div>
                    <div className="col">
                      <h6 className="author-name">
                        <Text field={props.fields.Name} />
                      </h6>
                      <p className="author-position">
                        <Text field={props.fields.Position} />
                      </p>
                    </div>
                  </div>
                  <h1 className="article-title">
                    <Text field={props.fields.Title} />
                  </h1>
                  <p className="article-excerpt">
                    <Text field={props.fields.Excerpt} />
                  </p>
                </div>
              </div>
              <div className="article-content-body mt-5">
                <RichText field={props.fields.Content} />
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
