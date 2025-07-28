import React from 'react';
import { JSX } from 'react';
import {
  Field,
  ImageField,
  RichTextField,
  Text,
  RichText,
  Link,
  LinkField,
  useSitecore,
  NextImage,
} from '@sitecore-content-sdk/nextjs';
import useVisibility from 'src/hooks/useVisibility';
import { ComponentProps } from 'lib/component-props';
import { DottedAccent } from 'components/NonSitecore/DottedAccent';
import { IconAccent } from 'components/NonSitecore/IconAccent';

interface Fields {
  Eyebrow: Field<string>;
  Title: Field<string>;
  Text: RichTextField;
  Link: LinkField;
  Image: ImageField;
  Icon: ImageField;
}

export type CtaBannerProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: CtaBannerProps): JSX.Element => {
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;
  const [isVisible, domRef] = useVisibility();
  const { styles, RenderingIdentifier: id } = params;
  return (
    <div
      className={`component cta-banner component-spaced ${styles}`}
      id={id ? id : undefined}
      ref={domRef}
    >
      <div className="container container-widest-fluid">
        <div className="container">
          <div className="row row-gap-4 main-content align-items-center">
            <div className="col-lg-6">
              <IconAccent image={fields.Icon} inverted />
              <div className="content-wrapper">
                <h6 className="eyebrow-accent">
                  <Text field={fields.Eyebrow} />
                </h6>
                <h1 className="display-4 fw-bold mb-3">
                  <Text field={fields.Title} />
                </h1>
                <div className="fs-5">
                  <RichText field={fields.Text} className="text-content" />

                  {(isPageEditing || fields?.Link?.value?.href) && (
                    <Link field={fields.Link} className="button button-main mt-3" />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-10 mx-auto col-lg-6 mx-lg-0">
              <div className="image-wrapper">
                <DottedAccent className="dotted-accent-top" />
                <NextImage
                  field={fields.Image}
                  className={`d-block mx-lg-auto img-fluid ${
                    !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
                  }`}
                  width={800}
                  height={800}
                />
                <DottedAccent className="dotted-accent-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LargeImage = ({ params, fields }: CtaBannerProps): JSX.Element => {
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;
  const [isVisible, domRef] = useVisibility();
  const { styles, RenderingIdentifier: id } = params;
  return (
    <div
      className={`component cta-banner component-spaced with-large-image with-dotted-accents ${styles}`}
      id={id ? id : undefined}
      ref={domRef}
    >
      <div className="container container-widest-fluid">
        <div className="row row-gap-4 main-content align-items-center">
          <div className="col-lg-6">
            <div className="content-column">
              <IconAccent image={fields.Icon} inverted />
              <div className="content-wrapper">
                <h6 className="eyebrow-accent">
                  <Text field={fields.Eyebrow} />
                </h6>
                <h1 className="display-4 fw-bold mb-3">
                  <Text field={fields.Title} />
                </h1>
                <div className="fs-5">
                  <RichText field={fields.Text} className="text-content" />

                  {(isPageEditing || fields?.Link?.value?.href) && (
                    <Link field={fields.Link} className="button button-main mt-3" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-6 mx-lg-0">
            <div className="image-wrapper">
              <DottedAccent className="dotted-accent-top" />
              <NextImage
                field={fields.Image}
                className={`d-block mx-lg-auto img-fluid ${
                  !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
                }`}
                width={850}
                height={850}
              />
              <DottedAccent className="dotted-accent-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
