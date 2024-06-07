import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';

export const IconAccent = ({
  image,
  inverted,
}: {
  image: ImageField;
  inverted?: boolean;
}): JSX.Element => {
  return (
    <div className={`icon-accent ${inverted ? 'inverted' : ''}`}>
      <Image field={image} />
    </div>
  );
};
