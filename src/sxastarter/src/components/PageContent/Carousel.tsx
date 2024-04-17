import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
  Image: ImageField;
}

export type CarouselItemProps = {
  fields: Fields;
};

interface CarouselComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    items: CarouselItemProps[];
  };
}

export const Default = (props: CarouselComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`container component carousel slide pb-5 ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="carousel-inner">
        {props.fields.items.map((item, i) => (
          <div key={i} className="carousel-item active">
            <Image field={item.fields.Image} className="d-block w-100" height={' '}></Image>
          </div>
        ))}
      </div>
    </div>
  );
};
