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
      className={`component component-spaced article-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="title display-6">{t('News') || 'News'}</div>
          </div>
          <div className="col-auto learn-more">
            <Link href="/vision">
              {t('See all') || 'See all'} <i className="fa fa-angle-right fs-3"></i>
            </Link>
          </div>
        </div>

        <div className="background p-3 p-sm-5">
          {newsItems?.map((item, i) => (
            <>
              <div className="row gx-5 row-gap-3 align-items-center" key={item.url}>
                <div className="col-lg-4">
                  <Image field={item.fields.Thumbnail} className="mw-100 h-auto" />
                </div>

                <div className="col-lg-6">
                  <h3 className="fs-4">
                    <Text field={item.fields.Title}></Text>
                  </h3>
                  <p>
                    <Text field={item.fields.Excerpt}></Text>
                  </p>
                  <Link href={item.url}>{t('Read more') || 'Read more'}</Link>
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

export default withDatasourceCheck()<ArticleListComponentProps>(ArticleList);
