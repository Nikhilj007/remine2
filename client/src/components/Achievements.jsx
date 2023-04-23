import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import AchievementCard from './AchievementCard'

const Achievements = () => {
    const achieveList = [
        {heading:'Got registered officially' ,
        date: '06 December 2022',
        icon:'💓',
        detail:' Remine India Private Limited is a Private incorporated on 06 December 2022 and is classified as the Indian Non-Government Company and is registered at Registrar of Companies, Bangalore.'},

        {heading:'Recycled x number of lithium batteries',
        date:'06 February 2022',
        icon:'🚀',
        detail: 'We have recycled very high amount of lithium batteries with ease and extracting profit out of the garbage batteries.'},

        {heading:'Got registered officially' ,
        date: '06 December 2022',
        icon:'💓',
        detail:' Remine India Private Limited is a Private incorporated on 06 December 2022 and is classified as the Indian Non-Government Company and is registered at Registrar of Companies, Bangalore.'},

        {heading:'Recycled x number of lithium batteries',
        date:'06 February 2022',
        icon:'🚀',
        detail:'We have recycled very high amount of lithium batteries with ease and extracting profit out of the garbage batteries.'},

    ]
    
  return (
    <>
        <div className='text-center text-4xl my-20 '>Journey till now</div>
        <div className='my-30 text-3xl flex flex-col'>
            <VerticalTimeline>
                {achieveList.map((item, index) => (
                        <AchievementCard key={index} 
                        item={item} />
                    )
                )}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Achievements