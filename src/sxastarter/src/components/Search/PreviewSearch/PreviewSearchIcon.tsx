export type PreviewSearchIconProps = {
  onClick?: (keyphrase: string) => void;
  className?: string;
  keyphrase: string;
};

const PreviewSearchIcon = ({
  onClick,
  className,
  keyphrase,
}: PreviewSearchIconProps): JSX.Element => {
  return (
    <span
      className={`preview-search-content-icon fa fa-search ${className || ''}`}
      onClick={() => {
        onClick && onClick(keyphrase);
      }}
    />
  );
};

export default PreviewSearchIcon;
