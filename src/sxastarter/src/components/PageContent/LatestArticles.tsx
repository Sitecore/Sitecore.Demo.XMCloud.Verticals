import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  DateField,
  Field,
  Image,
  ImageField,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface ArticleFields {
  Image: ImageField;
  Category: Field<string>;
  Title: Field<string>;
  Date: Field<string>;
}

type ArticleProps = {
  fields: ArticleFields;
  id: string;
  name: string;
  displayName: string;
  url: string;
};

const Article = ({
  Image: image,
  Category: category,
  Title: title,
  Date: date,
}: ArticleFields): JSX.Element => (
  <div className="item">
    <div className="item-image">
      <Image field={image} />
    </div>
    <div className="item-category">
      <Text field={category} />
    </div>
    <div className="item-title">
      <Text field={title} />
    </div>
    <div className="item-date">
      <DateField
        field={date}
        render={(date) =>
          date?.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
        }
      />
    </div>
  </div>
);

export type LatestArticlesProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: {
    items: ArticleProps[];
  };
};

const LatestArticles = (props: LatestArticlesProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const articles = props.fields?.items
    ?.filter((item) => item.name !== 'Data' && item.name !== 'Authors')
    ?.sort((a, b) => Date.parse(b.fields.Date.value) - Date.parse(a.fields.Date.value))
    ?.slice(0, 3);

  return (
    <div
      className={`component latest-articles ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="eyebrow-accent">Our Blog</div>
        <div className="latest-articles-header">
          <div className="title">Latest Blog Articles</div>
          <Link href="/insights" target="" className="button button-main">
            Discover All
          </Link>
        </div>
        <div className="items">
          {articles?.map((item) => (
            <Article
              key={item.id}
              Image={item.fields.Image}
              Category={item.fields.Category}
              Title={item.fields.Title}
              Date={item.fields.Date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<LatestArticlesProps>(LatestArticles);
