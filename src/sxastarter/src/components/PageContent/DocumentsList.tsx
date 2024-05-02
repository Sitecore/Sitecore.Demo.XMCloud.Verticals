import React from 'react';
import { Field, ImageField, Image, LinkField, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

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

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component documents-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="title">
          <Text field={props.fields?.Title1} />
        </div>
        <div className="row row-cols-1 row-cols-xl-2 justify-content-center documents-container">
          <div className="col px-4">
            <div className="item">
              <Image field={props.fields?.Image1} />
              <div className="text-container">
                <Link field={props.fields?.Link1} />
                <span className="subtitle">
                  <Text field={props.fields?.Subtitle1} />
                </span>
              </div>
            </div>
            <div className="item">
              <Image field={props.fields?.Image2} />
              <div className="text-container">
                <Link field={props.fields?.Link2} />
                <span className="subtitle">
                  <Text field={props.fields?.Subtitle2} />
                </span>
              </div>
            </div>
          </div>
          <div className="col px-4">
            <div className="item">
              <Image field={props.fields?.Image3} />
              <div className="text-container">
                <Link field={props.fields?.Link3} />
                <span className="subtitle">
                  <Text field={props.fields?.Subtitle3} />
                </span>
              </div>
            </div>
            <div className="item">
              <Image field={props.fields?.Image4} />
              <div className="text-container">
                <Link field={props.fields?.Link4} />
                <span className="subtitle">
                  <Text field={props.fields?.Subtitle4} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
