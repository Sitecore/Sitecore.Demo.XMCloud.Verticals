import React, { JSX } from 'react';
import { ComponentParams, ComponentRendering, Placeholder } from '@sitecore-content-sdk/nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component eyebrow	${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      <div className={`container container-${props.params?.ContainerWidth?.toLowerCase()}-fluid`}>
        <div className="row">
          <div className="col col-placeholder">
            <Placeholder name="eyebrow-left" rendering={props.rendering} />
            <Placeholder name="eyebrow-right" rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};
