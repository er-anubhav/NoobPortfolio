import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  jhanGonzales,
  propAlignSelf,
  propPadding,
  propWidth,
  propBorderRadius,
  propBackgroundColor,
  propBorder,
  onClick,
}) => {
  const footerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [
    propAlignSelf,
    propPadding,
    propWidth,
    propBorderRadius,
    propBackgroundColor,
    propBorder,
  ]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-sm text-shade-2 font-paragraph-sm ${className}`}
      style={footerStyle}
      onClick={onClick}
    >
      <div className="relative leading-[24px]">{jhanGonzales}</div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  jhanGonzales: PropTypes.string,
  onClick: PropTypes.func,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
};

export default Footer;
