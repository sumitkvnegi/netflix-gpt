import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(()=>{
      navigate("/");
    }).catch((error)=>{
      // * An error happened
      navigate("/error");
    })
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // * User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        // * User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // * unsubscribe when component will be unmount
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black flex justify-between items-center px-8'>
        <img className='w-44 py-2' src={LOGO} alt="logo" />
        {user != null ? (
          <div className='flex flex-col justify-center items-center'>
          <img className='w-8 aspect-square rounded-full' src={user.photoURL} alt="user-icon" />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
        ) : null}
    </div>
  )
}

export default Header