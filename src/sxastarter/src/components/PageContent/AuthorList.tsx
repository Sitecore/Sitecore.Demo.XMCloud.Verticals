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
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { useI18n } from 'next-localization';

interface Fields {
  Name: Field<string>;
  Photo: ImageField;
  Bio: RichTextField;
  Position: Field<string>;
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
  const authors = props.fields?.items?.filter((item) => item.name !== 'Data');
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;
  const { t } = useI18n();

  return (
    <div
      className={`component author-list ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="background p-3 p-sm-5">
          {authors?.map((author, i) => (
            <React.Fragment key={author.url}>
              <div
                className={`row gx-5 row-gap-3 align-items-center ${
                  i % 2 !== 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="col-lg-4">
                  <Image field={author.fields.Photo} />
                </div>
                <div className="col-lg-8">
                  <h3 className="fs-3 mb-0">
                    <Text field={author.fields.Name}></Text>
                  </h3>
                  <p className="position fs-5">
                    <Text field={author.fields.Position} />
                  </p>
                  <div className={`bio fs-5 ${isPageEditing ? '' : 'clamped'}`}>
                    <RichText field={author.fields.Bio}></RichText>
                  </div>
                  <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                    <Link href={author.url} className="button button-secondary">
                      {t('Read more') || 'Read more'}
                    </Link>
                  </div>
                </div>
              </div>
              {i === authors.length - 1 ? <></> : <hr />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<AuthorListComponentProps>(AuthorList);
