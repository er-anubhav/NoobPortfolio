import PropTypes from "prop-types";

const Project = ({ className = "", title, description, image }) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-shade-4 box-border flex flex-row items-start justify-start py-[58px] px-[59px] gap-[8px] max-w-full text-left text-13xl text-shade1 font-paragraph-sm border-[1px] border-solid border-shade-3 mq1125:flex-wrap mq1350:pl-[29px] mq1350:pr-[29px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[60px] pl-0 box-border gap-[32px] min-w-[290px] max-w-full mq450:gap-[16px] mq450:pr-5 mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-36 box-border min-h-[420px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
              {title}
            </h1>
            <div className="relative text-base leading-[150%]">
              2023 - Product design
            </div>
            <div className="self-stretch relative text-lg leading-[150%] text-shade-2">
              {description}
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-shade1 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
          <div className="relative text-base leading-[24px] font-semibold font-paragraph-sm text-shade1 text-left inline-block min-w-[128px]">
            Read case study
          </div>
        </button>
      </div>
      <img
        className="w-[626px] relative rounded-2xl max-h-full object-cover max-w-full mq1125:flex-1"
        loading="lazy"
        alt=""
        src={image}
      />
    </div>
  );
};

Project.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Project;
