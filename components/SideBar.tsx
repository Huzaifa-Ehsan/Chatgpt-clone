"use client";

import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import {
  collection,
  deleteDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { useRouter } from "next/navigation";
import {
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  const deleteAllRows = async () => {
    const done = confirm("Do you really want to delete all chats?");
    if (done === true) {
      const querySnapshot = await getDocs(
        collection(db, "users", session?.user?.email!, "chats")
      );
      const promises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(promises);
    }
    router.replace("/");
  };

  const logoutHandler = async () => {
    const done = confirm("Do you really want to Logout?");
    if (done === true) {
      await signOut();
    }
  };

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 mt-2">
            {loading && (
              <div className="animate-pulse text-white text-center">
                <p>Loading Chats...</p>
              </div>
            )}
            {/* Map through the chatrows */}
            {chats?.docs.map((chat) => {
              return <ChatRow key={chat.id} id={chat.id} />;
            })}
          </div>
        </div>
      </div>

      {session && (
        <>
          <picture>
            <img
              className="h-12 w-12 my-2 rounded-full mx-auto cursor-pointer hover:opacity-50"
              src={session?.user?.image!}
              alt="Profile Image"
            />
          </picture>
          <div
            onClick={deleteAllRows}
            className="border-gray-700 border chatRow my-2"
          >
            <XMarkIcon className="hidden sm:inline-flex sm:h-5 sm:w-5 text-gray-400" />
            <button className="text-gray-300">Delete Chats?</button>
          </div>
          <div
            onClick={logoutHandler}
            className="border-gray-700 border chatRow mb-4"
          >
            <ArrowLeftOnRectangleIcon className="hidden sm:inline-flex sm:h-5 sm:w-5 text-gray-400" />
            <button className="text-gray-300">Logout?</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
