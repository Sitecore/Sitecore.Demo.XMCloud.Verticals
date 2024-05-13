import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
}

export type LoanCalculatorProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: LoanCalculatorProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component loan-calculator ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <img src="/loan_calculator.JPG" alt="temp" style={{ width: '100%' }} />
    </div>
  );
};
