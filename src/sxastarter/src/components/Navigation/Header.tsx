import { ImageField, NextImage, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component header ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      <div className={`container container-${props.params?.ContainerWidth?.toLowerCase()}-fluid`}>
        <div className="row align-items-center">
          <div className="col-auto">
            <Placeholder name="header-left" rendering={props.rendering} />
          </div>
          <div className="col">
            <Placeholder name="header-right" rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};

export type WithImageProps = ComponentProps & {
  fields: {
    LogoImage: ImageField;
  };
};

export const WithLogoImage = (props: WithImageProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component header ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      <div className={`container container-${props.params?.ContainerWidth?.toLowerCase()}-fluid`}>
        <div className="row align-items-center">
          <div className="col-auto">
            <NextImage field={props.fields.LogoImage} width={200} height={50} />
          </div>
          <div className="col">
            <Placeholder name="header-right" rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};
