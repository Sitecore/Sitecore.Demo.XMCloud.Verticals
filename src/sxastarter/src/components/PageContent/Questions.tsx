import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title1: Field<string>;
  Text1: Field<string>;
  Title2: Field<string>;
  Text2: Field<string>;
  Title3: Field<string>;
  Text3: Field<string>;
  Title4: Field<string>;
  Text4: Field<string>;
}

export type QuestionsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: QuestionsProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`container component three-column-cta ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="content-wrapper">
              <h2>
                <Text field={props.fields.Title1} />
              </h2>
              <p>
                <Text field={props.fields.Text1} />
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="content-wrapper">
              <h2>
                <Text field={props.fields.Title2} />
              </h2>
              <p>
                <Text field={props.fields.Text2} />
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="content-wrapper">
              <h2>
                <Text field={props.fields.Title3} />
              </h2>
              <p>
                <Text field={props.fields.Text3} />
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="content-wrapper">
              <h2>
                <Text field={props.fields.Title4} />
              </h2>
              <p>
                <Text field={props.fields.Text4} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
