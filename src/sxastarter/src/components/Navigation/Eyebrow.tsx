import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component eyebrow	d-none d-lg-block ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-auto">
            <Placeholder name="eyebrow-right" rendering={props.rendering} />
            <span style={{ paddingLeft: 40 }}>
              English <i className="fa fa-angle-up"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
