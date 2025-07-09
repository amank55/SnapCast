import Header from '@/components/header'
import VideoCard from '@/components/VideoCard'
import React from 'react'
import { dummyCards } from '@/constants';

const page = () => {
  return (
    <main className="max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen pt-12.5 pb-20 gap-9">
      <Header title="All videos" subHeader="Public Library"/>    
      {dummyCards.map(card => (
        <VideoCard key={card.id} {...card} />
      ))}
      </main>
  )
}

export default page