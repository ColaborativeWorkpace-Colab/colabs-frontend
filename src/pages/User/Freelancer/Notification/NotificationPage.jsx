import React, { useState } from 'react';
import FreelancerHeader from "../Header/Header";
import devaImg from '../../../../assets/images/Deva.jpg'

const NotificationPage = () => {
  // Example data for notifications
  const notifications = [
    { id: 1, type: 'comment', content: 'Daniel Demelash and 9 others have commented on your post.', avatar: devaImg, time: '10:30 AM' },
    { id: 2, type: 'like', content: 'Kalkidan Getahun and 7 others liked your post.', avatar: devaImg, time: '11:45 AM' },
    { id: 3, type: 'reposted', content: 'Dagmawi Neibiat reposted your post.', avatar: devaImg, time: '2:15 PM' },
    { id: 4, type: 'send-birthday', content: 'Wish Dagmawi Eyob a happy birthday!', avatar: devaImg, time: '9:00 AM' },
    { id: 5, type: 'post', content: 'You have a new follower: Mekdes Tibebu.', avatar: devaImg, time: '4:20 PM' },
    { id: 6, type: 'profile-view', content: 'Daniel Demelash viewed your profile.', avatar: devaImg, time: '1:30 PM' },
    { id: 7, type: 'job-recommendation', content: 'New job recommendation: Fullstack Software Developer at Addis Software.', avatar: devaImg, time: '3:45 PM' },
    // Add more notification data as needed
  ];

  return (
    <>
    <FreelancerHeader selectedNav={4} />
    <div className='flex justify-between'>
      <div className='leftSide flex-shrink-0 w-22 h-full items-start mt-[100px] pl-12 py-8 shadow-lg rounded-[5%]'>
          <h3 className='font-bold text-gray-800'>Manage your Noifications</h3>
          <a href="#" className="cursor-pointer text-blue-500 hover:underline font-bold">View Setting</a>


      </div>

 
    <div className='w-full flex-grow h-full mt-[50px] py-8'>
      <div className='notifications items-center'>
        {notifications.map(notification => (
          <div key={notification.id}>
            <NotificationItem
              type={notification.type}
              content={notification.content}
              avatar={notification.avatar}
              time={notification.time}
            />
          </div>
        ))}
    </div>

      </div>
      
    <div className='rightSide items-end flex-shrink-0 w-22'>
        

    </div>
    </div>
    </>
  );
};

const NotificationItem = ({ type, content, avatar, time }) => {
  let icon;
  switch (type) {
    case 'comment':
      icon = '💬';
      break;
    case 'like':
      icon = '👍';
      break;
    case 'reposted':
      icon = '🔄';
      break;
    case 'send-birthday':
      icon = '🎂';
      break;
    case 'post':
      icon = '✉️';
      break;
    case 'profile-view':
      icon = '👀';
      break;
    case 'job-recommendation':
      icon = '💼';
      break;
    default:
      icon = '❗';
  }

  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(true);
  };

  return (
    <div className='py-8 px-8 w-1/2  my-2 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <div className="avatar">
        <img className='block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0' src={avatar} alt="Avatar" />
      </div>
      <div className="notification-content">
        <span className='mr-2'>{icon}</span>
        <span onClick={handleNotificationClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>{content}</span>
        
        {showNotification && (
          <div className="notification-popup flex justify-between mx-auto">
            <span>{content}</span> <br />
            <span>{time}</span>
            {/* Add additional details or actions for the notification popup */}
          </div>
        )}
      </div>
      <div className='flex justify-end'>
        <h1></h1>
        <br /> <span className="notification-time text-sm ">{time}</span> 
      </div>
      
    </div>
  );
};

export default NotificationPage;

