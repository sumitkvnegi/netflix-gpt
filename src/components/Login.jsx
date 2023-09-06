import React, { useState } from "react";
import Header from "./Header";
import tw from "tailwind-styled-components";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <Form>
        <h1 className="text-2xl font-bold tracking-wider mb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
        <Input type="text" placeholder="Full Name" />
        )}
        <Input type="text" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Button>{isSignInForm ? "Sign In" : "Sign Up"}</Button>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">{isSignInForm ? "New To Netflix?" : "Already have account?"}</p>
          <p
            className="cursor-pointer text-gray-50"
            onClick={toggleSignInForm}
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
const Form = tw.form`absolute text-white w-1/4 h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black mx-auto flex flex-col px-12 py-12 gap-6 bg-opacity-90 rounded-lg border-2 border-gray-950`;
const ImageContainer = tw.div`absolute w-full -z-10`;
