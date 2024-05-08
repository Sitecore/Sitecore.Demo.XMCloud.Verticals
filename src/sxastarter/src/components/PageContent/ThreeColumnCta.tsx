import React from 'react';
import {
  Field,
  ImageField,
  Image,
  Text,
  LinkField,
  Link,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

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

export const Default = (props: ThreeColumnCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div
      className={`component three-column-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <div className="content-wrapper">
              <Image field={props.fields.Image1} height={' '} />
              <h2>
                <Text field={props.fields.Text1} />
              </h2>
              <p>
                <Text field={props.fields.SubText1} />
              </p>
              {!isPageEditing && props.fields?.Link1?.value?.href && (
                <Link field={props.fields.Link1} className="button button-main" />
              )}
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="content-wrapper">
              <Image field={props.fields.Image2} height={' '} />
              <h2>
                <Text field={props.fields.Text2} />
              </h2>
              <p>
                <Text field={props.fields.SubText2} />
              </p>
              {!isPageEditing && props.fields?.Link1?.value?.href && (
                <Link field={props.fields.Link2} className="button button-main" />
              )}
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="content-wrapper">
              <Image field={props.fields.Image3} height={' '} />
              <h2>
                <Text field={props.fields.Text3} />
              </h2>
              <p>
                <Text field={props.fields.SubText3} />
              </p>
              {!isPageEditing && props.fields?.Link1?.value?.href && (
                <Link field={props.fields.Link3} className="button button-main" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Bordered = (props: ThreeColumnCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component bordered three-column-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <div className="content-wrapper">
              <Image field={props.fields.Image1} height={' '} />
              <h2>
                <Text field={props.fields.Text1} />
              </h2>
              <p>
                <Text field={props.fields.SubText1} />
              </p>
              <Link field={props.fields.Link1} className="button button-main" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="content-wrapper">
              <Image field={props.fields.Image2} height={' '} />
              <h2>
                <Text field={props.fields.Text2} />
              </h2>
              <p>
                <Text field={props.fields.SubText2} />
              </p>
              <Link field={props.fields.Link2} className="button button-main" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="content-wrapper">
              <Image field={props.fields.Image3} height={' '} />
              <h2>
                <Text field={props.fields.Text3} />
              </h2>
              <p>
                <Text field={props.fields.SubText3} />
              </p>
              <Link field={props.fields.Link3} className="button button-main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
