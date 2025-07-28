import React from 'react';
import {
  Field,
  Image,
  ImageField,
  RichTextField,
  Text,
  RichText,
  Link,
  LinkField,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
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

export const Default = ({ params, fields }: ParallaxBannerProps) => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const BannerContentBlock = (
    <div className="parallax-banner-content-inner">
      <h1 className="display-3 fw-bold text-center mb-3">
        <Text field={fields.Title} />
      </h1>
      <div className="fs-5 text-center">
        <RichText field={fields.Text} />

        {(isPageEditing || fields?.Link?.value?.href) && (
          <Link field={fields.Link} className="button button-main mt-3" />
        )}
      </div>
    </div>
  );

  const background: BannerLayer = {
    image: `${fields.BackgroundImage?.value?.src}`,
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
    children: BannerContentBlock,
    className: 'parallax-banner-content',
  };

  const foreground: BannerLayer = {
    image: `${fields.ForegroundImage?.value?.src}`,
    translateY: [0, 10],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    className: 'parallax-banner-foreground',
  };

  return (
    <div
      className={`component parallax-banner ${isPageEditing ? 'edit-mode' : ''} ${styles}`}
      id={id ? id : undefined}
    >
      {isPageEditing ? (
        <div className="parallax-banner-inner">
          <Image field={fields.BackgroundImage} className="parallax-banner-background" />
          <div className="parallax-banner-content">{BannerContentBlock}</div>
          <Image field={fields.ForegroundImage} className="parallax-banner-foreground" />
        </div>
      ) : (
        <ParallaxBanner
          layers={[background, headline, foreground]}
          className="parallax-banner-inner"
        />
      )}
    </div>
  );
};
