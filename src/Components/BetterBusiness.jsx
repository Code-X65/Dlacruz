import React from 'react'
import { useState, useEffect } from 'react'
const BetterBusiness = () => {
const [displayedTitle, setDisplayedTitle] = useState('');
const [displayedText, setDisplayedText] = useState('');
const [titleIndex, setTitleIndex] = useState(0);
const [textIndex, setTextIndex] = useState(0);
const [showCursor, setShowCursor] = useState('title');

const title = 'Making Business Better';
const fullText = `In today's rapidly evolving corporate world, having a solid business strategy is no longer optional—it's essential. The recent pandemic, coupled with increasing regulatory demands and new reporting standards, has made it clear that businesses must adopt a digital-first approach and address operational gaps swiftly.

Yet, many organizations struggle to manage this transformation on their own. That's where we come in. At Affility, we take the time to understand your current position, evaluate your challenges, and guide you toward the most effective solutions—while supporting you every step of the way. This partnership empowers you to move forward with confidence and achieve your goals.

Founded in 2017 by a team of seasoned global professionals from diverse consulting backgrounds, Affility delivers comprehensive digital transformation, business transformation, and advisory services with precision and integrity—always focused on creating impactful, results-driven solutions.`;

useEffect(() => {
  if (titleIndex < title.length) {
    const timeout = setTimeout(() => {
      setDisplayedTitle(prev => prev + title[titleIndex]);
      setTitleIndex(prev => prev + 1);
    }, 100);
    return () => clearTimeout(timeout);
  } else if (textIndex < fullText.length) {
    setShowCursor('text');
    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + fullText[textIndex]);
      setTextIndex(prev => prev + 1);
    }, 20);
    return () => clearTimeout(timeout);
  } else {
    setShowCursor('none');
  }
}, [titleIndex, textIndex]);
  return (
    <>
    <div className='bg-gray-900 text-white py-4'>

    <div className='flex flex-col-reverse md:flex-row gap-8 justify-between items-center max-w-7xl mx-auto animate-fade-in'>
        <div className='flex-1 mx-2'>
            <img src="https://www.affilityconsulting.com/wp-content/uploads/2024/08/affility-business-strategy.jpg" alt="" />
        </div>
        <div className='flex-1 mx-2'>
         <h4 className='uppercase font-bold text-2xl md:text-4xl my-4 text-purple-300'>
  {displayedTitle}
  {showCursor === 'title' && <span className='animate-pulse'>|</span>}
</h4>


<p className='font-medium whitespace-pre-line'>
  {displayedText}
  {showCursor === 'text' && <span className='animate-pulse'>|</span>}
</p>

        </div>
    </div>
    </div>
    
    </>
  )
}

export default BetterBusiness