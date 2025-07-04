import React, { useState,useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const [username, setusername] = useState('')

    useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        try {
          const userData = JSON.parse(loggedInUser);
  
          let name = 'admin'; // default fallback
  
          if (userData?.data?.firstName) {
            name = userData.data.firstName;
          } else if (userData?.firstName) {
            name = userData.firstName;
          } else if (userData?.username) {
            name = userData.username;
          }
  
          setusername(name);
  
        } catch (error) {
          console.error("Error parsing logged-in user data:", error);
          setusername('User');
        }
      }
    }, []);

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header