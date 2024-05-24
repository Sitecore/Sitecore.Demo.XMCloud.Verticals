import React from 'react';
import {
  Field,
  ImageField,
  Image,
  Text,
  withDatasourceCheck,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Name: Field<string>;
  Position: Field<string>;
  Photo: ImageField;
}

export type AuthorWidgetProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const AuthorWidget = (props: AuthorWidgetProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component author-widget ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="author-card row g-0">
        <div className="col-auto">
          <Image field={props.fields.Photo} className="author-img" />
        </div>
        <div className="col">
          <h6 className="author-name">
            <Text field={props.fields.Name} />
          </h6>
          <p className="author-position">
            <Text field={props.fields.Position} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<AuthorWidgetProps>(AuthorWidget);
