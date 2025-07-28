import { JSX } from 'react';
import {
  Field,
  ImageField,
  LinkField,
  Link,
  Text,
  RichTextField,
  RichText,
  NextImage,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Image1: ImageField;
  Title1: Field<string>;
  Text1: RichTextField;
  Title2: Field<string>;
  Text2: RichTextField;
  Title3: Field<string>;
  Text3: RichTextField;
  Title4: Field<string>;
  Text4: RichTextField;
  Copyright: Field<string>;
  Link1: LinkField;
  Link2: LinkField;
  SocialsTitle: Field<string>;
  SocialLink1: LinkField;
  SocialIcon1: ImageField;
  SocialLink2: LinkField;
  SocialIcon2: ImageField;
  SocialLink3: LinkField;
  SocialIcon3: ImageField;
}

export type FooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: FooterProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  return (
    <div className={`component component-spaced footer ${styles}`} id={id ? id : undefined}>
      <div className="container">
        <div className="content">
          <div className="logo">
            <NextImage field={fields?.Image1} width={200} height={200} className="img-fluid" />
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 row-gap-5 gx-5">
            <div className="col">
              <div className="title">
                <Text field={fields?.Title1} />
              </div>
              <div className="links">
                <RichText field={fields?.Text1} />
              </div>
            </div>
            <div className="col">
              <div className="title">
                <Text field={fields?.Title2} />
              </div>
              <div className="links">
                <RichText field={fields?.Text2} />
              </div>
            </div>
            <div className="col">
              <div className="title">
                <Text field={fields?.Title3} />
              </div>
              <div className="links">
                <RichText field={fields?.Text3} />
              </div>
            </div>
            <div className="col">
              <div className="title">
                <Text field={fields?.Title4} />
              </div>
              <div className="links">
                <RichText field={fields?.Text4} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footnote">
          <Text field={fields?.Copyright} />
          <div className="privacy-links">
            <Link field={fields?.Link1} />
            <Link field={fields?.Link2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const WithSocials = ({ params, fields }: FooterProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  return (
    <div
      className={`component component-spaced footer with-socials ${styles}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="content">
          <div className="logo">
            <NextImage field={fields?.Image1} width={200} height={200} className="img-fluid" />
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-gap-5 gx-5">
            <div className="col">
              <div className="title eyebrow-accent">
                <Text field={fields?.Title1} />
              </div>
              <div className="links">
                <RichText field={fields?.Text1} />
              </div>
            </div>
            <div className="col">
              <div className="title eyebrow-accent">
                <Text field={fields?.Title2} />
              </div>
              <div className="links">
                <RichText field={fields?.Text2} />
              </div>
            </div>
            <div className="col">
              <div className="title eyebrow-accent">
                <Text field={fields?.SocialsTitle} />
              </div>
              <div className="links links-socials">
                <Link field={fields?.SocialLink1}>
                  <NextImage field={fields?.SocialIcon1} width={16} height={16} />
                </Link>
                <Link field={fields?.SocialLink2}>
                  <NextImage field={fields?.SocialIcon2} width={16} height={16} />
                </Link>
                <Link field={fields?.SocialLink3}>
                  <NextImage field={fields?.SocialIcon3} width={16} height={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footnote">
          <Text field={fields?.Copyright} />
          <div className="privacy-links">
            <Link field={fields?.Link1} />
            <Link field={fields?.Link2} />
          </div>
        </div>
      </div>
    </div>
  );
};
