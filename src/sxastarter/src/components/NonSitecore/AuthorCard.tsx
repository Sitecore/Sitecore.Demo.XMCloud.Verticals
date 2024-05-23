import React from 'react';
import { Field, ImageField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Name: Field<string>;
  Photo: ImageField;
  Position: Field<string>;
}

export type AuthorCardProps = {
  fields: Fields;
};

export const AuthorCard = (props: AuthorCardProps): JSX.Element => {
  return (
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
  );
};
