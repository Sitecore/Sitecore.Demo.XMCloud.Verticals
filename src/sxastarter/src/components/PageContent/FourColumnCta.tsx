import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`container component three-column-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <img width={'100%'} src="https://placehold.co/600x400" alt="1 of 4"></img>
        </div>
        <div className="col-sm-6 col-md-3">
          <img width={'100%'} src="https://placehold.co/600x400" alt="2 of 4"></img>
        </div>
        <div className="col-sm-6 col-md-3">
          <img width={'100%'} src="https://placehold.co/600x400" alt="3 of 4"></img>
        </div>
        <div className="col-sm-6 col-md-3">
          <img width={'100%'} src="https://placehold.co/600x400" alt="4 of 4"></img>
        </div>
      </div>
    </div>
  );
};
