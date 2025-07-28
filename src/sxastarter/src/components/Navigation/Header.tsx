import { ImageField, NextImage, Placeholder } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

export const Default = ({ params, rendering }: ComponentProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  return (
    <div className={`component header ${styles}`} id={id ? id : undefined}>
      <div className={`container container-${params?.ContainerWidth?.toLowerCase()}-fluid`}>
        <div className="row align-items-center">
          <div className="col-auto">
            <Placeholder name="header-left" rendering={rendering} />
          </div>
          <div className="col">
            <Placeholder name="header-right" rendering={rendering} />
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

export const WithLogoImage = ({ params, fields, rendering }: WithImageProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  return (
    <div className={`component header ${styles}`} id={id ? id : undefined}>
      <div className={`container container-${params?.ContainerWidth?.toLowerCase()}-fluid`}>
        <div className="row align-items-center">
          <div className="col-auto">
            <NextImage field={fields.LogoImage} width={200} height={50} />
          </div>
          <div className="col">
            <Placeholder name="header-right" rendering={rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};
