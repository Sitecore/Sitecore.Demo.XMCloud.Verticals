import React from 'react';
import {
  Field,
  ImageField,
  Image,
  RichTextField,
  Text,
  RichText,
  Link,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ParallaxBackgroundImage } from 'components/NonSitecore/ParallaxBackgroundImage';

interface Fields {
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
  Link: LinkField;
}

export type PromoCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: PromoCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div
      className={`component promo-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row row-gap-4 main-content align-items-center">
          <div className="col-lg-5 text-center text-lg-start">
            <h1 className="display-6 fw-bold mb-3">
              <Text field={props.fields.Title} />
            </h1>
            <div className="fs-5">
              <RichText field={props.fields.Text} />

              {(isPageEditing || props.fields?.Link?.value?.href) && (
                <Link field={props.fields.Link} className="button button-main mt-3" />
              )}
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-7 mx-lg-0 image-wrapper">
            <Image field={props.fields.Image} className="d-block  mx-lg-auto img-fluid"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WithBackgroundImage = (props: PromoCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div
      className={`component promo-cta with-background-image ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <ParallaxBackgroundImage BackgroundImage={props.fields.Image} />
      <div className="container">
        <div className="row justify-content-center main-content">
          <div className="col-12 mx-auto">
            <h1 className="display-3 fw-bold text-center mb-3">
              <Text field={props.fields.Title} />
            </h1>
            <div className="fs-3 text-center">
              <RichText field={props.fields.Text} />

              {(isPageEditing || props.fields?.Link?.value?.href) && (
                <Link field={props.fields.Link} className="button button-main mt-3" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
