import React from 'react';
import {
  Field,
  ImageField,
  RichTextField,
  Text,
  RichText,
  Link,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

interface Fields {
  Title: Field<string>;
  Text: RichTextField;
  BackgroundImage: ImageField;
  ForegroundImage: ImageField;
  Link: LinkField;
}

export type ParallaxBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: ParallaxBannerProps) => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  const background: BannerLayer = {
    image: `${props.fields.BackgroundImage?.value?.src}`,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    className: 'parallax-banner-background',
  };

  const headline: BannerLayer = {
    translateY: [-30, 20],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        className="position-absolute d-flex flex-column align-items-center justify-content-center"
        style={{ inset: 0, zIndex: 10 }}
      >
        <div style={{ maxWidth: '50%' }}>
          <h1 className="display-3 fw-bold text-center mb-3">
            <Text field={props.fields.Title} />
          </h1>
          <div className="fs-5 text-center">
            <RichText field={props.fields.Text} />

            {(isPageEditing || props.fields?.Link?.value?.href) && (
              <Link field={props.fields.Link} className="button button-main mt-3" />
            )}
          </div>
        </div>
      </div>
    ),
    className: 'parallax-banner-content',
  };

  const foreground: BannerLayer = {
    image: `${props.fields.ForegroundImage?.value?.src}`,
    translateY: [0, 10],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    className: 'parallax-banner-foreground',
  };

  return (
    <div
      className={`component parallax-banner ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <ParallaxBanner
        layers={[background, headline, foreground]}
        className="parallax-banner-inner"
      />
    </div>
  );
};
