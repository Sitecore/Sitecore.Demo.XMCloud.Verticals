import React from 'react';
import {
  DateField,
  Field,
  Image,
  ImageField,
  Link,
  LinkField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Eyebrow: Field<string>;
  Title: Field<string>;
  Link: LinkField;
  Image1: ImageField;
  Category1: Field<string>;
  Title1: Field<string>;
  Date1: Field<string>;
  Image2: ImageField;
  Category2: Field<string>;
  Title2: Field<string>;
  Date2: Field<string>;
  Image3: ImageField;
  Category3: Field<string>;
  Title3: Field<string>;
  Date3: Field<string>;
}

export type LatestArticlesProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type ArticleProps = {
  image: ImageField;
  category: Field<string>;
  title: Field<string>;
  date: Field<string>;
};

const Article = ({ image, category, title, date }: ArticleProps): JSX.Element => (
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

export const Default = (props: LatestArticlesProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  console.log(props.fields.Date1);

  return (
    <div
      className={`component latest-articles ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="eyebrow-accent">
          <Text field={props.fields?.Eyebrow} />
        </div>
        <div className="latest-articles-header">
          <div className="title">
            <Text field={props.fields?.Title} />
          </div>
          <div className="button button-main">
            <Link field={props.fields?.Link} />
          </div>
        </div>
        <div className="items">
          <Article
            image={props.fields?.Image1}
            category={props.fields?.Category1}
            title={props.fields?.Title1}
            date={props.fields?.Date1}
          />
          <Article
            image={props.fields?.Image2}
            category={props.fields?.Category2}
            title={props.fields?.Title2}
            date={props.fields?.Date2}
          />
          <Article
            image={props.fields?.Image3}
            category={props.fields?.Category3}
            title={props.fields?.Title3}
            date={props.fields?.Date3}
          />
        </div>
      </div>
    </div>
  );
};
