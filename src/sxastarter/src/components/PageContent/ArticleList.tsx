import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image,
  Text,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useI18n } from 'next-localization';
import { AuthorCard } from 'components/NonSitecore/AuthorCard';

interface Fields {
  Title: Field<string>;
  Excerpt: Field<string>;
  Content: RichTextField;
  Thumbnail: ImageField;
  BackgroundImage: ImageField;
  Name: Field<string>;
  Photo: ImageField;
  Position: Field<string>;
}

export type ArticleListItemProps = {
  fields: Fields;
  name: string;
  url: string;
};

interface ArticleListComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    items: ArticleListItemProps[];
  };
}

export const Default = (props: ArticleListComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const newsItems = props.fields?.items?.filter((item) => item.name !== 'Data');
  const { t } = useI18n();

  return (
    <div
      className={`component article-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="background p-3 p-sm-5">
          {newsItems?.map((item, i) => (
            <>
              <div
                className={`row gx-5 row-gap-3 align-items-center ${
                  i % 2 !== 0 ? 'flex-row-reverse' : ''
                }`}
                key={item.url}
              >
                <div className="col-lg-4">
                  <Image field={item.fields.Thumbnail} />
                </div>

                <div className="col-lg-8">
                  <h3 className="fs-4">
                    <Text field={item.fields.Title}></Text>
                  </h3>
                  <p className="article-excerpt fs-5">
                    <Text field={item.fields.Excerpt}></Text>
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                    <AuthorCard {...item} />
                    <Link href={item.url} className="button button-secondary">
                      {t('Read more') || 'Read more'}
                    </Link>
                  </div>
                </div>
              </div>
              {i === newsItems.length - 1 ? <></> : <hr />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ThreeColumn = (props: ArticleListComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const newsItems = props.fields?.items?.filter((item) => item.name !== 'Data').slice(0, 3);
  const { t } = useI18n();

  return (
    <div
      className={`component component-spaced article-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title display-6">{t('More News') || 'More News'}</div>
          </div>
        </div>
        <div className="row row-gap-3">
          {newsItems?.map((item) => (
            <div className="col-lg-4" key={item.url}>
              <Link href={item.url} className="wrapper-link">
                <Image field={item.fields.Thumbnail} />
                <h3 className="fs-4 mt-3">
                  <Text field={item.fields.Title}></Text>
                </h3>
                <AuthorCard {...item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Simplified = (props: ArticleListComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const newsItems = props.fields?.items?.filter((item) => item.name !== 'Data').slice(0, 2);
  const { t } = useI18n();

  return (
    <div
      className={`component component-spaced article-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="title display-6">{t('News') || 'News'}</div>
          </div>
          <div className="col-auto learn-more">
            <Link href="/vision" className="button-simple">
              {t('See all') || 'See all'} <i className="fa fa-angle-right fs-3"></i>
            </Link>
          </div>
        </div>

        <div className="background p-3 p-sm-5">
          {newsItems?.map((item, i) => (
            <>
              <div className="row gx-5 row-gap-3 align-items-center" key={item.url}>
                <div className="col-lg-4">
                  <Image field={item.fields.Thumbnail} />
                </div>

                <div className="col-lg-6">
                  <h3 className="fs-4">
                    <Text field={item.fields.Title}></Text>
                  </h3>
                  <p>
                    <Text field={item.fields.Excerpt}></Text>
                  </p>
                  <Link href={item.url} className="button-simple">
                    {t('Read more') || 'Read more'}
                  </Link>
                </div>
              </div>
              {i === newsItems.length - 1 ? <></> : <hr />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
