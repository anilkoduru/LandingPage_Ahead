import React from 'react'
import Image from 'next/image'
import Work_card from './work_card'
import { workData } from '@/pages/work_with_us'

const Work_with_us = () => {
  return (
    <div className='w-[75%] h-[770px] ml-auto mr-auto flex justify-between bg-[#f3f1ff] p-12 rounded-2xl overflow-y-auto'>
        <div className='w-[50%]'>
            <h1 className='text-[45px] font-bold pb-5 pt-8'>Work with us</h1>
            <div className='w-[93%] bg-white p-8 rounded-t-xl'>
                <Image src='/purple-doodle.png' alt='doodle' width={50} height={10}/>
                <p className='pt-3 pb-3 font-bold text-[18px]'>About</p>
                <p className='text-[18px] text-[#555558]'>At ahead out goal is to make self-improvement fun and lasting. We know theres a way how to make it work. And thats what aHead is all about!</p>
            </div>
            <div className='w-[93%] bg-[#fef7f1] p-8 rounded-xl relative bottom-2'>
                <p className='pt-3 pb-3 font-bold text-[18px]'>Product</p> 
                <p className='text-[18px] text-[#555558]'>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
            </div>
        </div>
        <div className='flex flex-col items-end'>
            <h1 className='text-[45px] font-bold pb-5 pt-8 text-[#6643f3]'>ahead</h1>
            <div className='relative overflow-y-scroll ms-auto flex flex-col items-end'>
                {workData.map((content,index)=>(
                    <Work_card 
                        key={index}
                        heading={content.heading}
                        text={content.text}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work_with_us