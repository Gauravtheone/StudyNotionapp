import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearnLanguageSection from '../components/core/HomePage/LearnLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMOre';
import ReviewSlider from './../components/common/ReviewSlider'
const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContentmax-w-maxContent items-center text-white justify-between'>

        <Link to={"/signup"}>
          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblue-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap- rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className='mt-7 text-center text-4xl font-semibold'>
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300  '>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.

        </div>
        <div className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>
            Learn more
          </CTAButton >
          <CTAButton active={false} linkto={"/signup"}>
            book a demo
          </CTAButton>
        </div>

        <div className='shadow-blue-200 mx-12 my-5' >
          <video muted loop autoPlay >
            <source src={banner} type="video/mp4" />
          </video>

        </div>



        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock Your
                <HighlightText text={"coding potential "} > </HighlightText>
                with our online Courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={
              {
                btnText: "try it yourself", linkto: "/signup", active: true
              }
            }
            ctabtn2={
              {
                btnText: "Learn more", linkto: "/login", active: false
              }
            }
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          ></CodeBlocks>
        </div>



        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Start
                <HighlightText text={"coding in seconds"} > </HighlightText>

              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={
              {
                btnText: "Continue Lesson", linkto: "/signup", active: true
              }
            }
            ctabtn2={
              {
                btnText: "Learn more", linkto: "/login", active: false
              }
            }
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          ></CodeBlocks>
        </div>

        {/* <ExploreMore></ExploreMore> */}
        <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

        <h2 className='text-center text-4xl font-semibold mt-10'>Review from other Learners</h2>

<ReviewSlider></ReviewSlider>

        </div>





      </div>







      {/* section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[333px]'>
          <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-center  mx-auto'>
            <div className='h-[150px]'></div>
            <div className='flex flex-row gap-7 '>
              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                  Explore Full Catalog
                  <FaArrowRight></FaArrowRight>
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={'/signup'}>
                <div className='text-white'>Learn more</div>
              </CTAButton>

            </div>



          </div>

        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
          <div className='flex flex-row gap-7 mb-10 mt-36'>
            <div className='text-4xl font-semibold w-[45%]'>
              Get the Skills you nedd for a
              <HighlightText text={"job that is in demand"}></HighlightText>
            </div>
            <div className='flex flex-col gap-10 w-[40%] items-start '>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}><div>Learn more</div></CTAButton>
            </div>




          </div>
          <TimeLineSection></TimeLineSection>
          <LearnLanguageSection></LearnLanguageSection>

        </div>






      </div>





      {/* section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

        <InstructorSection></InstructorSection>











      </div>


















      {/* footer */}
      <Footer></Footer>

    </div>
  )
}

export default Home
