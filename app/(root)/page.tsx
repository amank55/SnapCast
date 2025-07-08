import Header from '@/components/header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const page = () => {
  return (
    <main className="max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen pt-12.5 pb-20 gap-9">
      <Header title="All videos" subHeader="Public Library"/>
      <h1 className='text-3xl font-karla underline'>Name aman Kumar       
      </h1>

      <VideoCard/>
      </main>
  )
}

export default page