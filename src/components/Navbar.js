import Footer from "./Footer";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch [backdrop-filter:blur(20px)] flex flex-row items-center justify-center py-5 px-0 box-border max-w-full ${className}`}
    >
      <div className="w-[1200px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-[1200px] mq450:gap-[20px] mq1350:max-w-full">
        <div className="flex flex-row items-start justify-start gap-[24px] max-w-full">
          <Footer
            jhanGonzales="Work"
            propPadding="8px 14px"
            propWidth="unset"
            propBorderRadius="8px"
            propBackgroundColor="unset"
            propBorder="unset"
            className="footer-item"
          />
          <Footer
            jhanGonzales="About "
            propPadding="8px 14px"
            propWidth="unset"
            propBorderRadius="8px"
            propBackgroundColor="unset"
            propBorder="unset"
            className="footer-item"
          />
          <Footer
            jhanGonzales="Blog"
            propPadding="8px 14px"
            propWidth="unset"
            propBorderRadius="8px"
            propBackgroundColor="unset"
            propBorder="unset"
            className="footer-item"
          />
          <Footer
            jhanGonzales="Contact"
            propPadding="8px 14px"
            propWidth="unset"
            propBorderRadius="8px"
            propBackgroundColor="unset"
            propBorder="unset"
            className="footer-item"
          />
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
