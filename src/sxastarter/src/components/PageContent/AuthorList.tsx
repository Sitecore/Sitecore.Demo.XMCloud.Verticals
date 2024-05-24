import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image,
  Text,
  withDatasourceCheck,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useI18n } from 'next-localization';

interface Fields {
  Name: Field<string>;
  Photo: ImageField;
  Bio: RichTextField;
}

export type AuthorListItemProps = {
  fields: Fields;
  name: string;
  url: string;
};

interface AuthorListComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    items: AuthorListItemProps[];
  };
}

const AuthorList = (props: AuthorListComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const newsItems = props.fields?.items?.filter((item) => item.name !== 'Data');
  const { t } = useI18n();

  return (
    <div
      className={`component component-spaced article-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="background p-3 p-sm-5">
          {newsItems?.map((item, i) => (
            <>
              <div className="row gx-5 row-gap-3 align-items-center" key={item.url}>
                <div className="col-lg-4">
                  <Image field={item.fields.Photo} className="mw-100 h-auto" />
                </div>

                <div className="col-lg-6">
                  <h3 className="fs-4">
                    <Text field={item.fields.Name}></Text>
                  </h3>
                  <p>
                    <RichText field={item.fields.Bio}></RichText>
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

export default withDatasourceCheck()<AuthorListComponentProps>(AuthorList);
