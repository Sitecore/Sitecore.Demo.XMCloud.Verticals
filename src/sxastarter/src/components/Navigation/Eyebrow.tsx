import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useRouter } from 'next/router';
import React from 'react';

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const languageList = ['en', 'fr-CA'];
  const languageLabels = ['English', 'Canadian French'];

  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { sitecoreContext } = useSitecoreContext();

  const changeLanguage = (lang: string) => {
    if (pathname && asPath && query) {
      router.push(
        {
          pathname: pathname,
          query: query,
        },
        asPath,
        {
          locale: lang,
          shallow: false,
        }
      );
    }
  };

  const languageSelector = languageList && languageLabels.length > 0 && (
    <select
      onChange={(e) => changeLanguage(e.currentTarget.value)}
      className="languagePicker"
      value={sitecoreContext.language}
      style={{ backgroundColor: '#333', color: '#FFF' }}
    >
      {languageList.map((language, index) => (
        <option key={index} value={language} label={languageLabels[index]} className="languageItem">
          {languageLabels[index]}
        </option>
      ))}
    </select>
  );

  return (
    <div
      className={`component eyebrow	d-none d-lg-block ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-auto">
            <Placeholder name="eyebrow-right" rendering={props.rendering} />
            <span style={{ paddingLeft: 40 }}>{languageSelector}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
