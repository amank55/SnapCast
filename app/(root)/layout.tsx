import Navbar from '@/components/navbar'
import {ReactNode} from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="bg-white min-h-screen">
    <Navbar/>
    {children}
   </div>
  )
}

export default Layout