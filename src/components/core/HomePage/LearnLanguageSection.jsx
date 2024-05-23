import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'
import CTAbutton from './Button'
const LearnLanguageSection = () => {
  return (
 <div className='mt-[150px] mb-10'>  
    <div className='flex flex-col gap-5 items-center'>
      <div className='text-4xl font-semibold text-center '>
     Your Swiss Knife for
    <HighlightText text ={"Learning any language"}></HighlightText>
      </div>

 <div className='text-center text-richblack-600 mx-auto text-bae mt-3'>
 Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
 </div>


<div className='flex flex-row items-center justify-center mt-5'>
<img src ={know_your_progress} alt = "konowimage" className='object-contain -mr-32'></img>
<img src ={compare_with_others} alt = "compImage" className='object-contain'></img>
<img src ={plan_your_lessons} alt = "PlanImage" className='object-contain -ml-36'></img>
</div>

<div className='w-fit' >

<CTAbutton active={true} linkto={'/signup'}
  ><div>Learn more</div></CTAbutton>

</div>


 </div> 

    </div>
  )
}

export default LearnLanguageSection
