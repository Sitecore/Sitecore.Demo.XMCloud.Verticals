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
  Placeholder,
  NextImage,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { IconAccent } from 'components/NonSitecore/IconAccent';
import { DottedAccent } from 'components/NonSitecore/DottedAccent';

interface Fields {
  Tagline: Field<string>;
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
  Cta1: LinkField;
  Cta2: LinkField;
  Icon: ImageField;
}

export type HeroBannerProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields, rendering }: HeroBannerProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <div className={`component hero-banner ${styles}`} id={id ? id : undefined}>
      <div className="container container-wide">
        <div className="hero-row">
          <div className="content-column">
            <h6 className="eyebrow-accent">
              <Text field={fields.Tagline} />
            </h6>
            <h1 className="display-2 fw-bold">
              <Text field={fields.Title} />
            </h1>

            <div className="rich-content mb-4">
              <RichText field={fields.Text} />
            </div>
            <div className="btn-array pt-3 pb-4">
              {(isPageEditing || fields?.Cta1?.value?.href) && (
                <Link field={fields.Cta1} className="button button-main" />
              )}
              {(isPageEditing || fields?.Cta2?.value?.href) && (
                <Link field={fields.Cta2} className="button button-simple mx-4" />
              )}
            </div>
            <div className="row mt-2">
              <Placeholder name="hero-banner" rendering={rendering} />
            </div>
            <IconAccent image={fields.Icon} />
          </div>
          <div className="img-column">
            <div className="img-wrapper">
              <DottedAccent className="dotted-accent-top" />
              <NextImage field={fields.Image} className="img-fluid" width={700} height={700} />
              <DottedAccent className="dotted-accent-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
