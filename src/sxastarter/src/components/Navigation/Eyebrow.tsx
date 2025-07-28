import React, { JSX } from 'react';
import { ComponentParams, ComponentRendering, Placeholder } from '@sitecore-content-sdk/nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = ({ params, rendering }: ComponentProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  return (
    <div className={`component eyebrow	${styles}`} id={id ? id : undefined}>
      <div className={`container container-${params?.ContainerWidth?.toLowerCase()}-fluid`}>
        <div className="row">
          <div className="col col-placeholder">
            <Placeholder name="eyebrow-left" rendering={rendering} />
            <Placeholder name="eyebrow-right" rendering={rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};
