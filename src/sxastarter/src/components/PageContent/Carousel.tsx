import React, { useState } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image,
  RichTextField,
  LinkField,
  Text,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
  Link: LinkField;
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
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < props.fields.items.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : props.fields.items.length - 1));
  };

  return (
    <section className={`component ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      <div className="carousel">
        <ol className="carousel-indicators">
          {props.fields.items.map((_item, i) => (
            <li
              key={i}
              aria-label="Slide"
              className={i == index ? 'active' : ''}
              onClick={() => setIndex(i)}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {props.fields.items.map((item, i) => (
            <div key={i} className={'carousel-item ' + (i == index ? 'active' : '')}>
              <h1 className="d-md-none p-5">
                <Text field={item.fields.Title}></Text>
              </h1>
              <Image
                field={item.fields.Image}
                className="object-fit-cover d-block w-100"
                height={' '}
              ></Image>
              <div className="side-content">
                <div className="container">
                  <div className="col-lg-5 col-md-6 offset-md-6 offset-lg-7 pt-5 px-5 p-md-0">
                    <h1 className="d-none d-md-block">
                      <Text field={item.fields.Title}></Text>
                    </h1>
                    <p>
                      <Text field={item.fields.Text}></Text>
                    </p>
                    <Link field={item.fields.Link} className="btn btn-danger"></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
