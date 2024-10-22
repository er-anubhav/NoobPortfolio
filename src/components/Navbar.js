import Footer from "./Footer";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ className = "" }) => {
  const navigate = useNavigate();
  const takework = () => {
    navigate('/work');
  };
  return (
    <header
      className={`self-stretch [backdrop-filter:blur(20px)] flex flex-row items-center justify-center py-5 px-0 box-border max-w-full ${className}`}
    >
      <div className="w-[1200px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-[1200px] mq450:gap-[20px] mq1350:max-w-full">
        <div className="flex flex-row items-start justify-start gap-[24px] max-w-full">
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
            jhanGonzales="Work"
            propPadding="8px 14px"
            propWidth="unset"
            propBorderRadius="8px"
            propBackgroundColor="unset"
            propBorder="unset"
            className="footer-item"
            onClick={takework}
          />
          <Footer
            jhanGonzales="Blog"
            propPadding="8px 14px"
            propWidth="unset"
            propBorderRadius="8px"
            propBackgroundColor="unset"
            propBorder="unset"
            className="footer-item"
            onClick={() => navigate('/blog')}
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
