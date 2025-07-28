import React, { JSX } from 'react';
import { Field, RichText as JssRichText } from '@sitecore-content-sdk/nextjs';

interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: RichTextProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const text = fields ? (
    <JssRichText field={fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );

  return (
    <div className={`component rich-text ${styles}`} id={id ? id : undefined}>
      <div className="component-content">{text}</div>
    </div>
  );
};
