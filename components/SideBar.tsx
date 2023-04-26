"use client";

import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

const SideBar = () => {
  const {data: session} = useSession();
  // console.log(session)
  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session?.user?.email!, "chats")
  );
  // console.log(chats)

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat/>

          <div>{/* Model Selection */}</div>

          {/* Map through the chatrows */}
          {chats?.docs.map((chat)=>{
            return(
              <ChatRow key={chat.id} id={chat.id}/>
            )
          })}
        </div>
      </div>

      {session && (
        <picture>
          <img
            onClick={() => signOut()}
            className="h-12 w-12 rounded-full mx-auto cursor-pointer hover:opacity-50"
            src={session?.user?.image!}
            alt="Profile Image"
          />
        </picture>
      )}
    </div>
  );
}

export default SideBar;
