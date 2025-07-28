import React from 'react';
import { JSX } from 'react';
import {
  Field,
  ImageField,
  RichTextField,
  Text,
  RichText,
  useSitecore,
  Link,
  LinkField,
  NextImage,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
  Link: LinkField;
}

export type AppPromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: AppPromoProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <div className={`component hero ${styles}`} id={id ? id : undefined}>
      <picture>
        <NextImage field={fields.Image} className="" width={1920} height={400}></NextImage>
      </picture>
      <div className="container content-container">
        <div className="top-layout">
          <div className="title">
            <Text field={fields.Title} />
          </div>
          <div className="subtitle">
            <RichText field={fields.Text} />
          </div>
        </div>
        <div className="bottom-layout">
          <div className="btn-array">
            {(isPageEditing || fields?.Link?.value?.href) && (
              <Link field={fields.Link} className="button button-main mt-3" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
