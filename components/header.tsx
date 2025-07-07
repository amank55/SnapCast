import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ICONS } from '@/constants'
const Header = ({subHeader,title,userImg}: SharedHeaderProps) => {
  return (
    <header className='header'>
        <section className="header-container items-start">
            <div className='details'>
            {userImg &&(
                <Image src={userImg ||'/assets/images/dummy.jpg'} alt ="user" width = {66} height = {66} className="rounded-full"/>
            )}
            </div>


            <article className="flex-1 text-left">
                <p>{subHeader}</p>
                <h1 className="text-dark-200 text-3xl">{title}</h1>
            </article>

            <aside>
                <Link href = "/upload">
                <Image src = "/assets/icons/upload.svg" alt = "upload" height= {16} width = {16}/>
                <span>Upload a video</span>
                </Link>

                <div className='record'>
                <button className="primary-btn bg-[#ff4393] hover:bg-pink-600">
                    <Image src={ICONS.record} alt="camera" width={16} height={16}/>
                    <span>Record a video</span>
                </button>
                </div>
            </aside>
        </section>

        <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folders..."
          />
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={16}
            height={16}
          />
        </div>
        {`<DropdownList\>`}
      </section>
    </header>
  )
}

export default Header