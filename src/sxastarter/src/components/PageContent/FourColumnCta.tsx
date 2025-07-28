import React from 'react';
import { JSX } from 'react';
import {
  Field,
  ImageField,
  LinkField,
  Text,
  Link,
  useSitecore,
  NextImage,
} from '@sitecore-content-sdk/nextjs';
import useVisibility from 'src/hooks/useVisibility';

interface Fields {
  Title1: Field<string>;
  Text1: Field<string>;
  Image1: ImageField;
  Link1: LinkField;
  Title2: Field<string>;
  Text2: Field<string>;
  Image2: ImageField;
  Link2: LinkField;
  Title3: Field<string>;
  Text3: Field<string>;
  Image3: ImageField;
  Link3: LinkField;
  Title4: Field<string>;
  Text4: Field<string>;
  Image4: ImageField;
  Link4: LinkField;
}

export type FourColumnCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: FourColumnCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const Column = ({
    image,
    title,
    text,
    link,
    delay,
  }: {
    image: ImageField;
    title: Field<string>;
    text: Field<string>;
    link: LinkField;
    delay?: number;
  }) => {
    const [isVisible, domRef] = useVisibility(delay);
    return (
      <div
        className={`col-sm-12 col-lg-3 ${
          !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
        }`}
        ref={domRef}
      >
        <Link field={link}>
          <div className="content-wrapper">
            <NextImage field={image} width={300} height={300} />
            <div className="text-wrapper">
              <h2>
                <Text field={title} />
              </h2>
              <p>
                <Text field={text} />
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div
      className={`component component-spaced four-column-cta ${styles}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <Column
            image={fields.Image1}
            title={fields.Title1}
            text={fields.Text1}
            link={fields.Link1}
          />
          <Column
            image={fields.Image2}
            title={fields.Title2}
            text={fields.Text2}
            link={fields.Link2}
            delay={500}
          />
          <Column
            image={fields.Image3}
            title={fields.Title3}
            text={fields.Text3}
            link={fields.Link3}
            delay={1000}
          />
          <Column
            image={fields.Image4}
            title={fields.Title4}
            text={fields.Text4}
            link={fields.Link4}
            delay={1500}
          />
        </div>
      </div>
    </div>
  );
};
