import React from 'react';
import { JSX } from 'react';
import { Field, Text, useSitecore } from '@sitecore-content-sdk/nextjs';
import { CountUp } from 'components/NonSitecore/CountUp';

interface Fields {
  Title1: Field<string>;
  Amount1: Field<string>;
  Currency1: Field<string>;
  Subtitle1: Field<string>;
  Value1: Field<string>;
  Amount2: Field<string>;
  Currency2: Field<string>;
  Subtitle2: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: RichTextProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <div className={`component comparison ${styles}`} id={id ? id : undefined}>
      <div className="title">
        <Text field={fields?.Title1} />
      </div>
      <div className="d-flex justify-content-around">
        <div className="item">
          <div className="value">
            <span className="amount">
              {isPageEditing ? (
                <Text field={fields?.Amount1} />
              ) : (
                <CountUp value={parseInt(fields?.Amount1.value)} />
              )}
            </span>{' '}
            <span className="currency">
              <Text field={fields?.Currency1} />
            </span>
          </div>
          <span className="subtitle">
            <Text field={fields?.Subtitle1} />
          </span>
        </div>
        <div className="operator">
          <Text field={fields?.Value1} />
        </div>
        <div className="item">
          <div className="value">
            <span className="amount">
              {isPageEditing ? (
                <Text field={fields?.Amount2} />
              ) : (
                <CountUp value={parseInt(fields?.Amount2.value)} />
              )}
            </span>{' '}
            <span className="currency">
              <Text field={fields?.Currency2} />
            </span>
          </div>
          <span className="subtitle">
            <Text field={fields?.Subtitle2} />
          </span>
        </div>
      </div>
    </div>
  );
};
