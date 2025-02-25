import React from 'react';
import { Field, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
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

export const Default = (props: RichTextProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div
      className={`component comparison ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="title">
        <Text field={props.fields?.Title1} />
      </div>
      <div className="d-flex justify-content-around">
        <div className="item">
          <div className="value">
            <span className="amount">
              {isPageEditing ? (
                <Text field={props.fields?.Amount1} />
              ) : (
                <CountUp value={parseInt(props.fields?.Amount1.value)} />
              )}
            </span>{' '}
            <span className="currency">
              <Text field={props.fields?.Currency1} />
            </span>
          </div>
          <span className="subtitle">
            <Text field={props.fields?.Subtitle1} />
          </span>
        </div>
        <div className="operator">
          <Text field={props.fields?.Value1} />
        </div>
        <div className="item">
          <div className="value">
            <span className="amount">
              {isPageEditing ? (
                <Text field={props.fields?.Amount2} />
              ) : (
                <CountUp value={parseInt(props.fields?.Amount2.value)} />
              )}
            </span>{' '}
            <span className="currency">
              <Text field={props.fields?.Currency2} />
            </span>
          </div>
          <span className="subtitle">
            <Text field={props.fields?.Subtitle2} />
          </span>
        </div>
      </div>
    </div>
  );
};
