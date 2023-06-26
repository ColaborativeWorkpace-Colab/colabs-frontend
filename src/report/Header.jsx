import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div>
        <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white-200 shadow-sm">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="#" className="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-500">Colabs</span>
                        </a>
                        <div className="flex items-center lg:order-2">

                        </div>
                       
                    </div>
                </nav>
            </header>
</div>
  )
}

export default Header