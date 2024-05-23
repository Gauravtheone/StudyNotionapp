import React from 'react'
import { HomePageExplore } from '../../../data/homepage-explore'
import { useState } from 'react'
import HighlightText from './HighlightText'
import CourseCard from './CourseCard'

const tabsName = ["Free", "New to coding", "Most popular", "Skills paths", "Career paths"]



const ExploreMOre = () => {

  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);


  const setMycards = (value) => {
    setCurrentTab(value);
    console.log(HomePageExplore)
    const result = HomePageExplore.filter((course) => course.tag === value)
    console.log(result)
    setCourses(result[0].courses)
    setCurrentCard(result[0].courses[0].heading)
  }




  return (
    <div>
      <div className='text-4xl font-semibold text-center'>
        Unlock the
        <HighlightText text={'Power of Code'}></HighlightText>
      </div>
      <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'>
        Learn to build anything you can imagine
      </p>
      <div className='mt-5 px-10 py-3 flex flex-row gap-3 rounded-full bg-richblack-800 mb-5 border-richblack-100'>
        {

          tabsName.map((element, index) => {
            return (
              <div
                className={`text-[20px] flex flex-row items-center gap-2
               ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200"}
                rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5
                   `}
                key={index}
                onClick={() => setMycards(element)}
              >


                {element}



              </div>


















            )










          })

















        }















      </div>

<div className='lg:h-[180px]'></div>

<div className='absolute flex flex-row gap-10 justify-between '>
  {


 courses.map((element,index)=>{
return <CourseCard key={index}>
  cardData = {element}
  currentCard = {currentCard}
  setCurrentCard = {setCurrentCard}
</CourseCard>



 })






  }
</div>

    </div>
  )
}

export default ExploreMOre
