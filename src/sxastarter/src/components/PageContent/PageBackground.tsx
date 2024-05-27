import React from 'react';
import { Field, ImageField, Placeholder, Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { ParallaxImage } from 'components/NonSitecore/ParallaxBackgroundImage';

interface Fields {
  Title: Field<string>;
  Content: TextField;
  BackgroundImage: ImageField;
}

export type PageBackgroundProps = ComponentProps & {
  fields: Fields;
};

export const Default = (props: PageBackgroundProps): JSX.Element => {
  const id = props.params?.RenderingIdentifier;

  return (
    <div
      className={`component page-background col-12 ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <ParallaxImage BackgroundImage={props.fields.BackgroundImage} />

      <div className="container">
        <Placeholder name="page-navigation" rendering={props.rendering} />

        <h1 className="display-6 fw-bold">
          <Text field={props.fields.Title}></Text>
        </h1>
        <p className="fs-2">
          <Text field={props.fields.Content}></Text>
        </p>
      </div>

      <div className="background-content-wrapper">
        <div className="background-content component-spaced container rounded-corners">
          <div className="p-3 p-sm-5">
            <Placeholder name="background-page-content" rendering={props.rendering} />
          </div>
        </div>
        <Placeholder name="page-content" rendering={props.rendering} />
      </div>
    </div>
  );
};
