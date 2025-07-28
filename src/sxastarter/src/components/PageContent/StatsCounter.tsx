import React from 'react';
import { JSX } from 'react';
import { Field, ImageField, NextImage, Text, useSitecore } from '@sitecore-content-sdk/nextjs';
import { CountUp } from 'components/NonSitecore/CountUp';
import { DottedAccent } from 'components/NonSitecore/DottedAccent';

interface Fields {
  Image1: ImageField;
  Image2: ImageField;
  Value1: Field<string>;
  Symbol1: Field<string>;
  Caption1: Field<string>;
  Value2: Field<string>;
  Symbol2: Field<string>;
  Caption2: Field<string>;
  Value3: Field<string>;
  Symbol3: Field<string>;
  Caption3: Field<string>;
}

export type StatsCounterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = ({ params, fields }: StatsCounterProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  return (
    <div className={`component stats-counter component-spaced ${styles}`} id={id ? id : undefined}>
      <div className="container container-wide-fluid">
        <NextImage field={fields?.Image1} className="image-left" width={300} height={300} />
        <div className="container">
          <DottedAccent className="dotted-accent-top" />
          <div className="row gx-0">
            <div className="col-lg-4">
              <p className="display-6 fw-bold">
                <span>
                  {isPageEditing ? (
                    <Text field={fields?.Value1} />
                  ) : (
                    <CountUp value={parseInt(fields?.Value1.value)} />
                  )}
                </span>
                <span>
                  <Text field={fields?.Symbol1} />
                </span>
              </p>
              <p className="fs-5 mb-0">
                <Text field={fields?.Caption1} />
              </p>
            </div>
            <div className="col-lg-4">
              <p className="display-6 fw-bold">
                <span>
                  {isPageEditing ? (
                    <Text field={fields?.Value2} />
                  ) : (
                    <CountUp value={parseInt(fields?.Value2.value)} />
                  )}
                </span>
                <span>
                  <Text field={fields?.Symbol2} />
                </span>
              </p>
              <p className="fs-5 mb-0">
                <Text field={fields?.Caption2} />
              </p>
            </div>
            <div className="col-lg-4">
              <p className="display-6 fw-bold">
                <span>
                  {isPageEditing ? (
                    <Text field={fields?.Value3} />
                  ) : (
                    <CountUp value={parseInt(fields?.Value3.value)} />
                  )}
                </span>
                <span>
                  <Text field={fields?.Symbol3} />
                </span>
              </p>
              <p className="fs-5 mb-0">
                <Text field={fields?.Caption3} />
              </p>
            </div>
          </div>
          <DottedAccent className="dotted-accent-bottom" />
        </div>
        <NextImage field={fields?.Image2} className="image-right" width={300} height={300} />
      </div>
    </div>
  );
};
