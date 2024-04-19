import React, { CSSProperties } from 'react';
import { Field, ImageField, Placeholder, Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

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
  const backgroundStyle = (props?.fields?.BackgroundImage?.value?.src && {
    backgroundImage: `url('${props.fields.BackgroundImage.value.src}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }) as CSSProperties;

  return (
    <div
      className={`component page-background col-12 ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
      style={backgroundStyle}
    >
      <div className="container">
        <h1>
          <Text field={props.fields.Title}></Text>
        </h1>
        <p>
          <Text field={props.fields.Content}></Text>
        </p>
      </div>

      <div className="">
        <div className="container rounded bg-white">
          <div className="m-5">
            <Placeholder name="background-page-content" rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};
