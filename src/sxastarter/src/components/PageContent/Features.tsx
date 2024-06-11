import React from 'react';
import {
  Field,
  Image,
  ImageField,
  Link,
  LinkField,
  RichText,
  RichTextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Eyebrow: Field<string>;
  Text: RichTextField;
  Link: LinkField;
  Image1: ImageField;
  Title1: Field<string>;
  Text1: Field<string>;
  Image2: ImageField;
  Title2: Field<string>;
  Text2: Field<string>;
}

export type FeaturesProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FeaturesProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const hasImageRight =
    props.fields?.Image2?.value && Object.keys(props.fields.Image2.value).length > 0;

  return (
    <div className={`component features ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      <div className="container">
        <div className="info">
          <div className="eyebrow-accent">
            <Text field={props.fields?.Eyebrow} />
          </div>
          <p className="tagline">
            <RichText field={props.fields?.Text} />
          </p>
          <div className="button button-main">
            <Link field={props.fields?.Link} />
          </div>
        </div>
        <div className="items">
          <div className={`item left ${hasImageRight ? 'with-image-right' : ''}`}>
            <div className="icon">
              <Image field={props.fields?.Image1} />
            </div>
            <div className="title">
              <Text field={props.fields?.Title1} />
            </div>
            <p className="subtitle">
              <Text field={props.fields?.Text1} />
            </p>
          </div>
          <div className="item right">
            {hasImageRight && (
              <div className="icon">
                <Image field={props.fields?.Image2} />
              </div>
            )}
            <div className="title">
              <Text field={props.fields?.Title2} />
            </div>
            <p className="subtitle">
              <Text field={props.fields?.Text2} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
