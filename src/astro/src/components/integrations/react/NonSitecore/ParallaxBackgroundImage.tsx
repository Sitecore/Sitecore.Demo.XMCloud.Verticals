import React from 'react';
import { ImageField, Image, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ParallaxBanner } from 'react-scroll-parallax';

export type ParallaxImageProps = {
  BackgroundImage: ImageField;
};

export const ParallaxBackgroundImage = (props: ParallaxImageProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return isPageEditing ? (
    <Image field={props.BackgroundImage} className="background-image"></Image>
  ) : (
    <ParallaxBanner
      layers={[
        {
          image: `${props.BackgroundImage.value?.src}`,
          speed: -15,
        },
      ]}
      className="parallax-background-image"
    />
  );
};
