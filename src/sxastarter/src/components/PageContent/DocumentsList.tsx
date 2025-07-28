import React from 'react';
import { JSX } from 'react';
import {
  Field,
  ImageField,
  LinkField,
  Link,
  Text,
  useSitecore,
  NextImage,
} from '@sitecore-content-sdk/nextjs';
import useVisibility from 'src/hooks/useVisibility';

interface Fields {
  Title1: Field<string>;
  Subtitle1: Field<string>;
  Image1: ImageField;
  Link1: LinkField;
  Subtitle2: Field<string>;
  Image2: ImageField;
  Link2: LinkField;
  Subtitle3: Field<string>;
  Image3: ImageField;
  Link3: LinkField;
  Subtitle4: Field<string>;
  Image4: ImageField;
  Link4: LinkField;
}

export type DocumentsListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: DocumentsListProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const DocumentItem = ({
    image,
    subtitle,
    link,
    delay,
  }: {
    image: ImageField;
    subtitle: Field<string>;
    link: LinkField;
    delay?: number;
  }) => {
    const [isVisible, domRef] = useVisibility(delay);
    return (
      <div
        className={`col  ${!isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''}`}
        ref={domRef}
      >
        <div className="item">
          <NextImage field={image} width={30} height={40} />
          <div className="text-container">
            <Link field={link} />
            <span className="subtitle">
              <Text field={subtitle} />
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`component component-spaced documents-list ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="title display-6">
          <Text field={fields?.Title1} />
        </div>
        <div className="documents-container">
          <div className="row row-cols-1 row-cols-xl-2 gx-4 justify-content-center">
            <DocumentItem
              image={fields?.Image1}
              subtitle={fields?.Subtitle1}
              link={fields?.Link1}
              delay={0}
            />
            <DocumentItem
              image={fields?.Image2}
              subtitle={fields?.Subtitle2}
              link={fields?.Link2}
              delay={500}
            />
            <DocumentItem
              image={fields?.Image3}
              subtitle={fields?.Subtitle3}
              link={fields?.Link3}
              delay={1000}
            />
            <DocumentItem
              image={fields?.Image4}
              subtitle={fields?.Subtitle4}
              link={fields?.Link4}
              delay={1500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
