import React from 'react';
// DEMO TEAM CUSTOMIZATION - Removed Field and Text. Added RichTextField.
import { ImageField, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
// END CUSTOMIZATION
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
interface Fields {
  Image: ImageField;
  Link: TextField;
  Caption: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
}

type VideoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const VideoDefaultComponent = (props: VideoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Video</span>
    </div>
  </div>
);

export const Default = (props: VideoProps): JSX.Element => {
  if (props.fields) {
    const urlLink = props.fields.Link.value;

    return (
      <div className="component-content">
        <ReactPlayer url={urlLink.toString()} width="500px" height="400px" controls={true} />
      </div>
    );
  }

  return <VideoDefaultComponent {...props} />;
};
