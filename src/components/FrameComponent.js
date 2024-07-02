import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-center text-71xl text-shade-2 font-paragraph-sm ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center pt-[80px] px-5 pb-[61px] box-border max-w-full">
        <div className="w-[946px] flex flex-col items-center justify-start gap-[48px] max-w-full mq800:gap-[24px]">
          <img
            className="w-[339px] relative max-h-full max-w-full"
            loading="lazy"
            alt=""
            src="/graphic.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center">
          <h1 className="m-0 mx-auto  text-inherit font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
  Hi, I'm <span className="hover:text-yellow-500 transition duration-300 ease-in-out">Anubhav</span>
</h1>

            <h1 className="m-0 self-stretch relative text-13xl leading-[150%] font-normal font-subtitle mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
              I'm a passionate Web Developer focused on crafting remarkable
              digital experiences. My aim is to blend functionality and
              aesthetics to create impactful solutions
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
