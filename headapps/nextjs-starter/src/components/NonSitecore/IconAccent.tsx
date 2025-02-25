import { ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

export const IconAccent = ({
  image,
  inverted,
}: {
  image: ImageField;
  inverted?: boolean;
}): JSX.Element => {
  return (
    <div className={`icon-accent ${inverted ? 'inverted' : ''}`}>
      <NextImage field={image} width={32} height={32} />
    </div>
  );
};
