import CommonNav from "../components/CommonNav";
import Blogs from "../components/Blogs";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Work = () => {
  return (
    <div className="w-full h-[2893px] relative bg-shade-5 overflow-hidden flex flex-col items-start justify-start pt-0 pb-[1949.9px] pr-0 pl-[230px] box-border leading-[normal] tracking-[normal] mq450:pl-5 mq450:box-border mq800:pl-[57px] mq800:box-border mq1125:h-auto mq1350:pl-[115px] mq1350:box-border">
      <div className="mt-[-624.5px] w-[1243.4px] h-[1567.6px] relative max-w-[103%] shrink-0 flex items-center justify-center z-[0]">
        <img
          className="w-full h-full shrink-0 object-contain absolute left-[0px] top-[0px] [transform:scale(1.597)]"
          alt=""
          src="/blur-bg.svg"
        />
      </div>
      <main className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-start justify-start pt-0 px-0 pb-[63px] box-border gap-[80px] max-w-full z-[1] mq450:gap-[20px] mq800:gap-[40px]">
        <CommonNav />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-shade1 font-paragraph-sm">
          <div className="w-[1200px] flex flex-col items-start justify-start gap-[84px] max-w-full mq800:gap-[21px] mq1350:gap-[42px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full mq800:gap-[17px] mq1350:gap-[35px]">
              <div className="self-stretch h-[2061px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[56px] max-w-full mq800:gap-[28px] mq1125:h-auto">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
                  <h1 className="m-0 w-[1148px] h-[59px] relative text-inherit leading-[150%] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[43px] mq800:text-19xl mq800:leading-[58px]">
                    All Work
                  </h1>
                </div>
                <Blogs />
                <Blogs />
                <Blogs />
              </div>
              <Subscribe />
            </div>
            <Footer className="underline" jhanGonzales="Copyright ©2023 All rights reserved" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
