import PropTypes from "prop-types";

const Contact = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border max-w-full text-left text-29xl text-shade1 font-paragraph-sm ${className}`}
    >
      <div className="w-[1199px] rounded-3xl bg-shade-4 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[86px] px-[298px] pb-[73px] gap-[140.5px] max-w-full border-[1px] border-solid border-shade-3 mq450:gap-[18px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[35px] mq800:pl-[74px] mq800:pr-[74px] mq800:box-border mq1350:flex-wrap mq1350:gap-[70px] mq1350:pl-[149px] mq1350:pr-[149px] mq1350:box-border">
        <div className="mt-[-220.5px] ml-[-417.5px] h-[277px] w-[277px] relative rounded-[50%] box-border shrink-0 border-[0px] border-solid border-accent-3" />
        <div className="w-[607px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-col items-center justify-end gap-[48px] shrink-0 max-w-full mq800:gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
              <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-10xl mq450:leading-[43px] mq800:text-19xl mq800:leading-[58px]">
                Let's Talk!
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] text-shade-2 text-center">
                Interested in working together or have a question? Feel free to
                reach out. I'm here to help you turn your ideas into amazing
                digital realities. Looking forward to hearing from you soon!
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] max-w-full text-base mq800:flex-wrap">
              <div className="rounded-lg bg-shade-5 flex flex-row items-center justify-start py-2.5 pr-4 pl-[15px] gap-[8px] border-[1px] border-solid border-shade-3 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/email.svg"
                />
                <div className="relative leading-[150%] whitespace-nowrap cursor-pointer ">
                  er.tripathianubhav@gmail.com
                </div>
              </div>
              <div className="w-12 rounded-lg bg-shade-5 box-border flex flex-row items-center justify-center py-2.5 px-[11px] border-[1px] border-solid border-shade-3 cursor-pointer hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/mditwitter.svg"
                />
              </div>
              <div className="w-12 rounded-lg bg-shade-5 box-border flex flex-row items-center justify-center py-2.5 px-[11px] border-[1px] border-solid border-shade-3 cursor-pointer hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/riinstagramfill.svg"
                />
              </div>
              <div className="w-12 rounded-lg bg-shade-5 box-border flex flex-row items-center justify-center py-2.5 px-[11px] border-[1px] border-solid border-shade-3 cursor-pointer hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/rilinkedinfill.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[269px] w-[277px] flex flex-col items-start justify-start pt-[203.5px] px-0 pb-0 box-border shrink-0">
          <div className="self-stretch h-[277px] relative rounded-[50%] box-border shrink-0 border-[0px] border-solid border-accent-1" />
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
