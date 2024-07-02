import Navbar from "../components/Navbar";
import FrameComponent from "../components/FrameComponent";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full h-[6204px] relative bg-shade-5 overflow-hidden flex flex-col items-start justify-start pt-0 pb-[5260.9px] pr-0 pl-[230px] box-border leading-[normal] tracking-[normal] mq450:pl-5 mq450:box-border mq800:pl-[57px] mq800:box-border mq1125:h-auto mq1350:pl-[115px] mq1350:box-border">
      <div className="mt-[-624.5px] w-[1243.4px] h-[1567.6px] relative max-w-[103%] shrink-0 flex items-center justify-center z-[0]">
        <img
          className="w-full h-full shrink-0 object-contain absolute left-[0px] top-[0px] [transform:scale(1.597)]"
          alt=""
          src="/blur-bg.svg"
        />
      </div>
      <main className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border gap-[46px] max-w-full z-[1] mq800:gap-[23px]">
        <Navbar />
        <FrameComponent />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-29xl text-shade1 font-paragraph-sm">
          <div className="w-[1200px] flex flex-col items-start justify-start gap-[70px] max-w-full mq800:gap-[17px] mq1350:gap-[35px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full mq800:gap-[17px] mq1350:gap-[35px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq800:gap-[28px]">
                <div className="w-[1152px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[43px] mq800:text-19xl mq800:leading-[58px]">{`Insights & Reflections`}</h1>
                  <div className="self-stretch relative text-lg leading-[150%] text-shade-2">{`Welcome to 'Insights & Reflections,' where I share my thoughts, experiences, and in-depth analyses related to my projects and the world of user-centered design. Explore my latest blogs to gain valuable insights and stay updated with industry trends and innovations.`}</div>
                </div>
                <Blogs />
                <Blogs />
                <Blogs />
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="text-sm text-white underline cursor-pointer">Read more</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[56px] max-w-full mq800:gap-[28px]">
                <div className="w-[750px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-10xl mq450:leading-[43px] mq800:text-19xl mq800:leading-[58px]">
                    My work
                  </h1>
                  <div className="self-stretch relative text-lg leading-[150%] text-shade-2">
                    Here's a glimpse of some of my recent and exciting projects.
                    Each of them reflects my focus on user-centered design and
                    my commitment to excellence in user experience.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
                  <Project
                    title="Ecommerce"
                    description="Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience."
                    image="/image-3@2x.png"
                  />
                  <Project
                    title="Tour Booking App"
                    description="Designed a user-friendly travel booking app that enables users to effortlessly plan and book their dream vacations. The app offers a seamless experience for browsing destinations, selecting packages, and managing reservations, making travel planning a breeze"
                    image="/image-4@2x.png"
                  />
                  <Project
                    title="Online Streaming App"
                    description="Developed an intuitive online streaming app that brings entertainment to users' fingertips. The app offers a vast library of content, smooth playback, and personalized recommendations, enhancing the user's streaming experience"
                    image="/image-5@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                <div className="text-sm text-white underline cursor-pointer">See all projects</div>
                </div>
              </div>
            </div>
            <Contact />
            <Footer className="underline" jhanGonzales="Copyright ©2023 All rights reserved" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
