import React from 'react';
import { Field, ImageField, Image, LinkField, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text1: Field<string>;
  Image1: ImageField;
  Link1: LinkField;
  Text2: Field<string>;
  Image2: ImageField;
  Link2: LinkField;
  Text3: Field<string>;
  Image3: ImageField;
  Link3: LinkField;
  Text4: Field<string>;
  Image4: ImageField;
  Link4: LinkField;
  Text5: Field<string>;
  Image5: ImageField;
  Link5: LinkField;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component five-column-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row row-cols-3 row-cols-md-5 justify-content-center">
          <div className="col px-4">
            <Link field={props.fields.Link1}>
              <div className="image-container">
                <Image field={props.fields.Image1} className="d-block w-100 h-100" />
              </div>
            </Link>
            <div className="text-container">
              <Text field={props.fields.Text1} />
            </div>
          </div>
          <div className="col px-4">
            <Link field={props.fields.Link2}>
              <div className="image-container">
                <Image field={props.fields.Image2} className="d-block w-100 h-100" />
              </div>
            </Link>
            <div className="text-container">
              <Text field={props.fields.Text2} />
            </div>
          </div>
          <div className="col px-4">
            <Link field={props.fields.Link3}>
              <div className="image-container">
                <Image field={props.fields.Image3} className="d-block w-100 h-100" />
              </div>
            </Link>
            <div className="text-container">
              <Text field={props.fields.Text3} />
            </div>
          </div>
          <div className="col px-4">
            <Link field={props.fields.Link4}>
              <div className="image-container">
                <Image field={props.fields.Image4} className="d-block w-100 h-100" />
              </div>
            </Link>
            <div className="text-container">
              <Text field={props.fields.Text4} />
            </div>
          </div>
          <div className="col px-4">
            <Link field={props.fields.Link5}>
              <div className="image-container">
                <Image field={props.fields.Image5} className="d-block w-100 h-100" />
              </div>
            </Link>
            <div className="text-container">
              <Text field={props.fields.Text5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
