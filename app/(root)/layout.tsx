import Navbar from '@/components/navbar'
import {ReactNode} from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
    <Navbar/>
    {children}
   </div>
  )
}

export default Layout