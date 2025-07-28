import React from 'react';
import { JSX } from 'react';
import { Field, Text, Link, LinkField, useSitecore } from '@sitecore-content-sdk/nextjs';
import Head from 'next/head';

interface Fields {
  Eyebrow: Field<string>;
  Heading: Field<string>;
  Text: Field<string>;
  Link: LinkField;
}

export type HeadingCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: HeadingCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <div className={`component heading-cta ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="row gx-5">
          <div className="col">
            <div className="heading-content-wrapper">
              <h6 className="eyebrow-accent">
                <Text field={fields?.Eyebrow} />
              </h6>
              <h2 className="display-4 fw-bold">
                <Text field={fields?.Heading} />
              </h2>
              <p>
                <Text field={fields?.Text} />
              </p>
            </div>
          </div>
          <div className="col-12 pt-lg-5 col-lg-auto">
            {(isPageEditing || fields?.Link?.value?.href) && (
              <Link field={fields.Link} className="button button-main" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Compact = ({ params, fields }: HeadingCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <div className={`component heading-cta compact ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading-content-wrapper">
              <h6 className="eyebrow-accent">
                <Text field={fields?.Eyebrow} />
              </h6>
              <h2 className="display-6 fw-bold">
                <Text field={fields?.Heading} />
              </h2>
              <p>
                <Text field={fields?.Text} />
              </p>
            </div>
            {(isPageEditing || fields?.Link?.value?.href) && (
              <Link field={fields.Link} className="button button-main" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PageHeading = ({ params, fields }: HeadingCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <>
      <Head>
        <meta property="og:description" content={fields?.Text.value} />
        <meta property="og:name" content={fields?.Heading?.value} />
        <meta property="og:title" content={fields?.Heading?.value} />
        <meta property="og:type" content="page" />
      </Head>
      <div className={`component heading-cta ${styles}`} id={id ? id : undefined}>
        <div className="container container-wide">
          <div className="row gx-5">
            <div className="col">
              <div className="heading-content-wrapper">
                <h6 className="eyebrow-accent">
                  <Text field={fields?.Eyebrow} />
                </h6>
                <h1 className="display-1 fw-bold">
                  <Text field={fields?.Heading} />
                </h1>
                <p>
                  <Text field={fields?.Text} />
                </p>
              </div>
            </div>
            <div className="col-12 pt-lg-5 col-lg-auto">
              {(isPageEditing || fields?.Link?.value?.href) && (
                <Link field={fields.Link} className="button button-main" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Centered = ({ params, fields }: HeadingCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <div className={`component heading-cta ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="heading-content-wrapper mx-auto text-center">
          <h6 className="eyebrow-accent">
            <Text field={fields?.Eyebrow} />
          </h6>
          <h2 className="display-4 fw-bold">
            <Text field={fields?.Heading} />
          </h2>
          <p>
            <Text field={fields?.Text} />
          </p>
          {(isPageEditing || fields?.Link?.value?.href) && (
            <Link field={fields.Link} className="button button-main" />
          )}
        </div>
      </div>
    </div>
  );
};
