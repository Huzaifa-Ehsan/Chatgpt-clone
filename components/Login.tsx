"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {

  return (
    <div className="bg-[#11A47F] flex flex-col justify-center items-center h-screen ">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="SignIn"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign in to ChatGPT
      </button>
    </div>
  );
};

export default Login;
