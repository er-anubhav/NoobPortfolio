import PropTypes from "prop-types";

const Blogs = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-9xl text-shade1 font-paragraph-sm mq800:gap-[20px] ${className}`}
    >
      <div className="self-stretch rounded-3xl bg-shade-4 box-border flex flex-row items-start justify-start py-[58px] px-[59px] gap-[8px] max-w-full border-[1px] border-solid border-shade-3 mq1125:flex-wrap mq1350:pl-[29px] mq1350:pr-[29px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[60px] pl-0 box-border gap-[32px] min-w-[290px] max-w-full mq450:gap-[16px] mq450:pr-5 mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[87px] box-border min-h-[420px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                Bard vs ChatGPT: Which is better for coding?
              </h2>
              <div className="relative text-base leading-[150%]">Written by&nbsp;
              <span className="hover:text-yellow-500 transition duration-300 ease-in-out">
               Anubhav
              </span>
                
              </div>
              <div className="self-stretch relative text-lg leading-[150%] text-shade-2">
                For programmers, Generative AI offers tangible benefits. It
                helps with writing and debugging code, making our busy lives a
                bit easier as a result. But there are now competing tools like
                ChatGPT and Bard, which begs the question: which one is best for
                me to use?
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-shade1 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
            <div className="relative text-base leading-[24px] font-semibold font-paragraph-sm text-shade1 text-left inline-block min-w-[83px]">
              Read More
            </div>
          </button>
        </div>
        <img
          className="w-[626px] relative rounded-2xl max-h-full object-contain max-w-full mq1125:flex-1"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </div>
  );
};

Blogs.propTypes = {
  className: PropTypes.string,
};

export default Blogs;
