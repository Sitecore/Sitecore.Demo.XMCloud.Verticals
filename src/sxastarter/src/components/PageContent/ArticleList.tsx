import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useI18n } from 'next-localization';

interface Fields {
  Title: Field<string>;
  Excerpt: Field<string>;
  Thumbnail: ImageField;
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

const ArticleList = (props: ArticleListComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const newsItems = props.fields?.items?.filter((item) => item.name !== 'Data');
  const { t } = useI18n();

  return (
    <div
      className={`component article-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="title">{t('News') || 'News'}</div>
          </div>
          <div className="col-auto learn-more">
            <Link href="/vision">
              {t('See all') || 'See all'} <i className="fa fa-angle-right"></i>
            </Link>
          </div>
        </div>

        <div className="background px-5 pt-5 pb-3 rounded-5">
          {newsItems?.map((item, i) => (
            <div className="row align-items-center" key={i}>
              <div className="col-md-4 mb-4">
                <div className="py-3">
                  <Image field={item.fields.Thumbnail} className="rounded-5 mw-100 h-auto"></Image>
                </div>
              </div>

              <div className="col-md-8 mb-5 p-5">
                <h3>
                  <Text field={item.fields.Title}></Text>
                </h3>
                <p>
                  <Text field={item.fields.Excerpt}></Text>
                </p>
                <Link href={item.url}>{t('Read more') || 'Read more'}</Link>
              </div>
              {i === newsItems.length - 1 ? <></> : <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ArticleListComponentProps>(ArticleList);
