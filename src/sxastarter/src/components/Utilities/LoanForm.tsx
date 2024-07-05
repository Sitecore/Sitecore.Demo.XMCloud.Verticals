import React from 'react';
import { LayoutServicePageState, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import { GetLoanFormUI } from 'components/NonSitecore/GetLoanFormUI';
import { CdpIdentityEvent } from 'components/CdpIdentityEvent';
import { ApplicationFormProps } from 'lib/standard-props/props';

export const Default = (props: ApplicationFormProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const {
    sitecoreContext: { pageState, route },
  } = useSitecoreContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    if (pageState !== LayoutServicePageState.Normal || !route?.itemId) {
      return;
    }

    const formData = new FormData(e.target);
    const fullName = formData.get('text_FullName')?.toString() ?? '';
    const [firstName, lastName] = fullName.split(' ');

    CdpIdentityEvent({
      identityParams: {
        Email: formData.get('text_Email')?.toString() ?? '',
        firstName: firstName,
        lastName: lastName,
        IdNumber: formData.get('text_IdNumber')?.toString() ?? '',
        Mobile: formData.get('text_MobileNumber')?.toString() ?? '',
        Language: route.itemLanguage || config.defaultLanguage,
      },
    });
  }
  return (
    <div
      className={`component application-form ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <GetLoanFormUI formFields={props.fields} handleSubmitCallback={handleSubmit} />
    </div>
  );
};
