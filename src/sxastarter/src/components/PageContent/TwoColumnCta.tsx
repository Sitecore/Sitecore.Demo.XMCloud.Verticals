import React from 'react';
import { JSX } from 'react';
import {
  Field,
  ImageField,
  LinkField,
  Text,
  Link,
  useSitecore,
  Placeholder,
  NextImage,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
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
}

export type TwoColumnCtaProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields, rendering }: TwoColumnCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const Column = ({
    image,
    title,
    text,
    link,
    placeholder,
    delay,
  }: {
    image: ImageField;
    title: Field<string>;
    text: Field<string>;
    link: LinkField;
    placeholder: string;
    delay?: number;
  }) => {
    const [isVisible, domRef] = useVisibility(delay);
    const buttonStyle = params?.ButtonStyle
      ? `button-${params.ButtonStyle.toLowerCase()}`
      : 'button-main';

    return (
      <div
        className={`col-sm-12 col-lg-6 ${
          !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
        }`}
        ref={domRef}
      >
        <div className="content-wrapper">
          <NextImage field={image} width={800} height={800} />
          {(isPageEditing || title?.value) && (
            <h2>
              <Text field={title} />
            </h2>
          )}
          {(isPageEditing || text?.value) && (
            <p>
              <Text field={text} />
            </p>
          )}
          {(isPageEditing || link?.value?.href) && (
            <Link field={link} className={`button ${buttonStyle}`} />
          )}
          <Placeholder name={placeholder} rendering={rendering} />
        </div>
      </div>
    );
  };

  return (
    <div className={`component two-column-cta pb-5 ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="row">
          <Column
            image={fields.Image1}
            title={fields.Title1}
            text={fields.Text1}
            link={fields.Link1}
            placeholder="two-col-placeholder-left"
            delay={0}
          />
          <Column
            image={fields.Image2}
            title={fields.Title2}
            text={fields.Text2}
            link={fields.Link2}
            placeholder="two-col-placeholder-right"
            delay={500}
          />
        </div>
      </div>
    </div>
  );
};
