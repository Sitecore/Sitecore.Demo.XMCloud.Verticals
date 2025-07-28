import { JSX } from 'react';
import {
  Field,
  ImageField,
  RichTextField,
  Text,
  RichText,
  useSitecore,
  NextImage,
} from '@sitecore-content-sdk/nextjs';
import { useParallax } from 'react-scroll-parallax';

interface Fields {
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
}

export type AppPromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: AppPromoProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;
  const parallaxImg = useParallax<HTMLImageElement>({
    scale: [0.8, 1.2],
  });

  return (
    <div className={`component app-promo ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="row row-gap-5 align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-6 fw-bold mb-3">
              <Text field={fields.Title} />
            </h1>
            <div className="col-lg-10 fs-5">
              <RichText field={fields.Text} />
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-6 image-wrapper">
            <NextImage
              field={fields.Image}
              className={`${isPageEditing ? 'd-block' : 'd-none'} mx-lg-auto img-fluid`}
              width={700}
              height={700}
            />
            <img
              src={fields.Image.value?.src}
              alt={fields.Image.value?.alt as string}
              ref={parallaxImg.ref}
              loading="lazy"
              className={`${isPageEditing ? 'd-none' : 'd-block'} mx-lg-auto img-fluid`}
              style={{ transformOrigin: 'bottom' }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
