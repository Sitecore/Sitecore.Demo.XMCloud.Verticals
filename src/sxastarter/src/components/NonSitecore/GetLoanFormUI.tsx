import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { Fields } from 'lib/standard-props/props';

export const GetLoanFormUI = (props: {
  formFields: Fields;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  handleSubmitCallback: (e: any) => any;
}): JSX.Element => {
  //Intrinsic attributes type is applied to props. This would avoid that. Better solution??
  const { formFields, handleSubmitCallback } = { ...props };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitCallback(e);
        }}
      >
        <div className="application-form-inner">
          <div className="container">
            <div className="title">
              <Text field={formFields?.Title} />
            </div>
            <div className="subtitle">
              <RichText field={props.formFields?.Subtitle} />
            </div>
            <input
              id="text_FullName"
              name="text_FullName"
              className="input-field"
              defaultValue={props.formFields?.FullName?.value}
              placeholder="First and Last name"
            />
            <input
              id="text_IdNumber"
              name="text_IdNumber"
              className="input-field"
              defaultValue={props.formFields?.IDNumber?.value}
              placeholder="ID number"
            />
            <input
              name="text_Email"
              className="input-field"
              defaultValue={props.formFields?.Email?.value}
              placeholder="Email"
            />
            <input
              id="text_MobileNumber"
              name="text_MobileNumber"
              className="input-field"
              defaultValue={props.formFields?.MobileNumber?.value}
              placeholder="Mobile number"
            />
            <div className="footnote">
              <RichText field={props.formFields?.Footnote} />
            </div>
            <button className="button button-main submit-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
