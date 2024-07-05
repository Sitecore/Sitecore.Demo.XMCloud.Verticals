import { context } from 'lib/context';

interface IdentityProps {
  firstName: string;
  lastName: string;
  IdNumber: string;
  Mobile: string;
  Email: string;
  Language: string;
}
export function CdpIdentityEvent(props: { identityParams: IdentityProps }) {
  const { identityParams } = { ...props };

  context
    .getSDK('Events')
    .then((Events) =>
      Events.identity({
        channel: 'WEB',
        email: identityParams.Email,
        firstName: identityParams.firstName,
        lastName: identityParams.lastName,
        mobile: identityParams.Mobile,
        language: identityParams.Language,

        identifiers: [
          { provider: 'email', id: identityParams.Email ?? '' },
          //{ provider: 'IdNumber', id: idNumber ?? '' },
        ],
      })
    )
    .catch((e) => console.debug(e));
}
