"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [propmt, setPrompt] = useState("");
  const { data: session } = useSession();
  // console.log(session)

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!propmt) return;
    const input = propmt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    // console.log(message)

    await addDoc(
      collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
      message
    );
  };
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="flex p-5 space-x-5">
        <input
          className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={propmt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message..."
        />
        <button
          className="disabled:cursor-not-allowed disabled:text-white/50 text-white "
          type="submit"
          disabled={!session || !propmt}
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>{/* ModelSelection */}</div>
    </div>
  );
};

export default ChatInput;
