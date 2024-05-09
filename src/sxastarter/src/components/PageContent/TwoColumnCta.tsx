import React from 'react';
import {
  Field,
  ImageField,
  LinkField,
  Image,
  Text,
  Link,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

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

export type FourColumnCtaProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FourColumnCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div
      className={`component three-column-cta pb-5 ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="content-wrapper">
              <Image field={props.fields.Image1} height={' '} />
              <h2>
                <Text field={props.fields.Title1} />
              </h2>
              <p>
                <Text field={props.fields.Text1} />
              </p>
              {!isPageEditing && props.fields?.Link1?.value?.href && (
                <Link field={props.fields.Link1} className="button button-main" />
              )}
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="content-wrapper">
              <Image field={props.fields.Image2} height={' '} />
              <h2>
                <Text field={props.fields.Title2} />
              </h2>
              <p>
                <Text field={props.fields.Text2} />
              </p>
              {!isPageEditing && props.fields?.Link2?.value?.href && (
                <Link field={props.fields.Link2} className="button button-main" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
