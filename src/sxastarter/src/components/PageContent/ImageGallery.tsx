import React from 'react';
import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { DottedAccent } from 'components/NonSitecore/DottedAccent';

export type ImageItemProps = {
  fields: {
    Image: ImageField;
  };
  name: string;
  url: string;
};

export type ImageGalleryProps = {
  params: { [key: string]: string };
  fields: {
    items: ImageItemProps[];
  };
};

export const Default = (props: ImageGalleryProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const images = props.fields?.items;

  return (
    <div
      className={`component image-gallery ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <DottedAccent className="dotted-accent-top" />
        <div className="image-gallery-grid">
          {images?.map((image) => (
            <div className="image-gallery-item" key={image.url}>
              <Image field={image.fields.Image} />
            </div>
          ))}
        </div>
        <DottedAccent className="dotted-accent-bottom" />
      </div>
    </div>
  );
};
