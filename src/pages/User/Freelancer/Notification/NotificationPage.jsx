import React from "react";
import FreelancerHeader from "../Header/Header";
import daniImg from '../../../../assets/images/dani.jpeg'
const NotificationPage = () => {
  var listNotification = [1,2,3,4,5];
	return (
		<>
			<FreelancerHeader selectedNav={4} />
			<div className="w-full h-full mt-[50px] px-12 py-8">
				Notification Page
			</div>
			
          
    { 
       listNotification.map((v, k) =>  <div class="py-8 px-8 w-1/2  mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          
       <img class="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src={daniImg} alt="Dani's Face"/>
       <div class="text-center space-y-2 sm:text-left">
         <div class="space-y-0.5">
           <p class="text-lg text-black font-semibold">
             Daniel Demelash: Posted a new Post
           </p>
           <p class="text-slate-500 font-medium">
           What's one coding tip or piece of advice you wish you had known earlier in your career?
           </p>
         </div>
         <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">See more . . .</button>
       </div>
     </div> )
    }
   
			
		</>
	);
};

export default NotificationPage;
