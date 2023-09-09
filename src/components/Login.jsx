import React, { useState, useRef } from "react";
import Header from "./Header";
import tw from "tailwind-styled-components";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //! validate form details
    setErrorMessage(
      checkValidData(email.current.value, password.current.value)
    );
    // console.log(email);
    // console.log(password);
  };

  return (
    <div className="w-screen">
      <Header />
      <ImageContainer>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </ImageContainer>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-2xl font-bold tracking-wider mb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <Input
            onChange={() => setErrorMessage(null)}
            type="text"
            placeholder="Full Name"
          />
        )}
        <Input
          onChange={() => setErrorMessage(null)}
          ref={email}
          type="text"
          placeholder="Email Address"
        />
        <Input
          onChange={() => setErrorMessage(null)}
          ref={password}
          type="password"
          placeholder="Password"
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </Button>
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-400">
            {isSignInForm ? "New To Netflix?" : "Already have account?"}
          </p>
          <p
            className="cursor-pointer text-gray-50"
            onClick={() => {
              setErrorMessage(null);
              toggleSignInForm();
            }}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;

/* CSS - tailwind */

const Input = tw.input`rounded-md text-sm text-gray-400 bg-slate-900 px-2 py-4`;
const Button = tw.button`px-2 py-4 rounded-md font-semibold bg-red-700`;
const Form = tw.form`absolute text-white w-1/3 h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black mx-auto flex flex-col px-12 py-12 gap-6 bg-opacity-95 rounded-lg border-2 border-gray-950`;
const ImageContainer = tw.div`absolute w-full -z-10`;

const ErrorMessage = tw.p`text-xs text-center tracking-widest text-red-500 font-bold font-mono`;
