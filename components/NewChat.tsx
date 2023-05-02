"use client";

import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NewChat = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    /*addDoc() > Add a new document to specified CollectionReference with the given data, assigning it a document ID automatically. 
    First argument is the path:   collection(db, "users", session?.user?.email!, "chats")
    Second argument is the actual data itself: 
    {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    collection() > Gets a CollectionReference instance that refers to the collection at the specified absolute path.
    */

    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`); 
  };
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="sm:h-4 sm:w-4 hidden sm:inline-flex" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
