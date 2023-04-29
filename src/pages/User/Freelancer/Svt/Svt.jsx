import React from 'react'
import verifyiImg from "../../../../assets/images/verify.png"


const Svt = () => {
  return (
    <div className='bg-[#FBFBFB]'>
        <h1 className="ml-20 text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">Multiple Choice Quizzes</h1>
        <div className='ml-20 mt-8 p-8 font-semibold  text-gray-800 bg-white w-3/4 rounded-lg shadow-lg'>
            <h2>Become eligible for top software jobs by completing these steps:</h2>
            <ul class="list-verify list-3xl text-black-500">
                <li className='display: inline-flex m-4'> <img src={verifyiImg} alt="tick" className='display:inline-flex w-[2.5rem] sm:' /> <span className='mt-2'> Take a Quiz from your preferred Tech Stack</span></li> <br />
                <li className='display: inline-flex ml-4'><img src={verifyiImg} alt="tick" className='display:inline-flex w-[2.5rem] sm:' /><span className='mt-2'>Pass all Quizzes from one Tech Stack</span></li>
                
            </ul>       
        </div>
    </div>
  )
}

export default Svt