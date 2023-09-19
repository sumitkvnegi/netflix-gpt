import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import tw from "tailwind-styled-components";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // * An error happened
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // * User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
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
    };
  }, []);

  return (
    <HeaderWrapper>
      <img className="w-32 py-2" src={LOGO} alt="logo" />
      {user !== null ? (
        <ButtonsContainer>
          <select className="bg-transparent" onChange={(e)=>handleLanguageChange(e)}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.name}
                className="bg-black"
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
          <GPTSearchBtn
            onClick={() => dispatch(toggleGptSearchView())}
          >
            {!showGptSearch ? "GPT Search" : "Home"}
          </GPTSearchBtn>
          <img
            className="w-7 aspect-square rounded-sm cursor-pointer"
            src={
              user.photoURL
                ? user.photoURL
                : "https://i.pinimg.com/736x/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.jpg"
            }
            alt="user-icon"
            onClick={() => setShowUserInfo(!showUserInfo)}
          />
          {showUserInfo ? (
            <SignOutBtn
              onClick={handleSignOut}
            >
              Sign Out
            </SignOutBtn>
          ) : null}
        </ButtonsContainer>
      ) : null}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = tw.div`absolute w-screen bg-gradient-to-b from-black flex justify-between items-center px-8 z-50 text-white`;
const ButtonsContainer = tw.div`flex gap-2 justify-center items-center px-2 py-4 -mr-2 relative`;
const SignOutBtn = tw.button`text-sm hover:animate-pulse tracking-wider font-semibold px-3 py-1 rounded-sm bg-white text-red-600 absolute top-full right-2`;
const GPTSearchBtn = tw.button`text-sm tracking-wider hover:text-white duration-300 ease-in-out font-semibold px-3 py-1 rounded-sm text-white bg-red-700 bg-gradient-to-b from-red-600`;