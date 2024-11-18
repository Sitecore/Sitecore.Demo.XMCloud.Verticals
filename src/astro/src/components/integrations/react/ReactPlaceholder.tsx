import React from 'react';
import { Placeholder, SitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import componentFactory from "temp/componentFactory";

const ReactPlaceholder = (props) => {
  return (
    <div>
      <SitecoreContext layoutData={props.layoutData} componentFactory={componentFactory}>
        <Placeholder name={props.name} rendering={props.rendering} componentFactory={componentFactory} />
      </SitecoreContext>
    </div>
  );
}

export default ReactPlaceholder;