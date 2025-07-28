import React from 'react';
import { JSX } from 'react';
import {
  Field,
  ImageField,
  Text,
  LinkField,
  Link,
  useSitecore,
  NextImage,
} from '@sitecore-content-sdk/nextjs';
import useVisibility from 'src/hooks/useVisibility';

interface Fields {
  Text1: Field<string>;
  SubText1: Field<string>;
  Image1: ImageField;
  Link1: LinkField;
  Text2: Field<string>;
  SubText2: Field<string>;
  Image2: ImageField;
  Link2: LinkField;
  Text3: Field<string>;
  SubText3: Field<string>;
  Image3: ImageField;
  Link3: LinkField;
}

export type ThreeColumnCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: ThreeColumnCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const Column = ({
    image,
    text,
    subText,
    link,
    delay,
  }: {
    image: ImageField;
    text: Field<string>;
    subText: Field<string>;
    link: LinkField;
    delay?: number;
  }) => {
    const [isVisible, domRef] = useVisibility(delay);
    const buttonStyle = params?.ButtonStyle
      ? `button-${params.ButtonStyle.toLowerCase()}`
      : 'button-main';

    return (
      <div
        className={`col-sm-12 col-lg-4 ${
          !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
        } `}
        ref={domRef}
      >
        <div className="content-wrapper">
          <NextImage field={image} width={400} height={400} />
          <h2>
            <Text field={text} />
          </h2>
          <p>
            <Text field={subText} />
          </p>
          {(isPageEditing || link?.value?.href) && (
            <Link field={link} className={`button ${buttonStyle}`} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`component component-spaced three-column-cta ${styles}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <Column
            image={fields.Image1}
            text={fields.Text1}
            subText={fields.SubText1}
            link={fields.Link1}
          />
          <Column
            image={fields.Image2}
            text={fields.Text2}
            subText={fields.SubText2}
            link={fields.Link2}
            delay={500}
          />
          <Column
            image={fields.Image3}
            text={fields.Text3}
            subText={fields.SubText3}
            link={fields.Link3}
            delay={1000}
          />
        </div>
      </div>
    </div>
  );
};

export const WithIcons = ({ params, fields }: ThreeColumnCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const Column = ({
    image,
    text,
    subText,
    link,
    delay,
  }: {
    image: ImageField;
    text: Field<string>;
    subText: Field<string>;
    link: LinkField;
    delay?: number;
  }) => {
    const [isVisible, domRef] = useVisibility(delay);
    return (
      <div
        className={`col-sm-12 col-lg-4 ${
          !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
        } `}
        ref={domRef}
      >
        <Link field={link} className="wrapper-link">
          <div className="content-wrapper">
            <div className="image-wrapper mb-5">
              <NextImage field={image} width={32} height={32} />
            </div>
            <h2>
              <Text field={text} />
            </h2>
            <p>
              <Text field={subText} />
            </p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div
      className={`component component-spaced three-column-cta with-icons ${styles}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row gx-0">
          <Column
            image={fields.Image1}
            text={fields.Text1}
            subText={fields.SubText1}
            link={fields.Link1}
          />
          <Column
            image={fields.Image2}
            text={fields.Text2}
            subText={fields.SubText2}
            link={fields.Link2}
            delay={500}
          />
          <Column
            image={fields.Image3}
            text={fields.Text3}
            subText={fields.SubText3}
            link={fields.Link3}
            delay={1000}
          />
        </div>
      </div>
    </div>
  );
};

export const WithIconsCompact = ({ params, fields }: ThreeColumnCtaProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const Column = ({
    image,
    text,
    subText,
    link,
    delay,
  }: {
    image: ImageField;
    text: Field<string>;
    subText: Field<string>;
    link: LinkField;
    delay?: number;
  }) => {
    const [isVisible, domRef] = useVisibility(delay);
    return (
      <div
        className={`col-sm-12 col-lg-4 ${
          !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
        } `}
        ref={domRef}
      >
        <Link field={link} className="wrapper-link">
          <div className="content-wrapper">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="image-wrapper">
                <NextImage field={image} width={32} height={32} />
              </div>
              <h2 className="eyebrow-accent mb-0 mt-2">
                <Text field={text} />
              </h2>
            </div>
            <p>
              <Text field={subText} />
            </p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div
      className={`component component-spaced three-column-cta with-icons with-icons-compact ${styles}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row gx-0">
          <Column
            image={fields.Image1}
            text={fields.Text1}
            subText={fields.SubText1}
            link={fields.Link1}
          />
          <Column
            image={fields.Image2}
            text={fields.Text2}
            subText={fields.SubText2}
            link={fields.Link2}
            delay={500}
          />
          <Column
            image={fields.Image3}
            text={fields.Text3}
            subText={fields.SubText3}
            link={fields.Link3}
            delay={1000}
          />
        </div>
      </div>
    </div>
  );
};
