import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';

export const Default = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const availableLanguages = useMemo(
    () => [
      { code: 'en', label: 'English' },
      { code: 'fr-CA', label: 'Canadian French' },
    ],
    []
  );

  const changeLanguage = useCallback(
    (langCode: string) => {
      if (pathname && asPath && query) {
        router.push(
          {
            pathname,
            query,
          },
          asPath,
          {
            locale: langCode,
            shallow: false,
          }
        );
      }
    },
    [asPath, pathname, query, router]
  );

  return (
    <div
      className="language-switcher"
      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
    >
      <span className="selected-language">
        {availableLanguages.find((lang) => lang.code === sitecoreContext.language)?.label}
      </span>
      {showLanguageDropdown ? (
        <>
          <svg
            className="chevron-down-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
          <div className="language-dropdown">
            {availableLanguages.map((lang) => (
              <span key={lang.code} onClick={() => changeLanguage(lang.code)}>
                {lang.label}
              </span>
            ))}
          </div>
        </>
      ) : (
        <svg className="chevron-up-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      )}
    </div>
  );
};
