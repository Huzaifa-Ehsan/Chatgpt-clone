import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import React from "react";

type Props ={
  params:{
    id: string;
  }
}

function ChatPage({params: {id}}: Props) {
  // console.log(id)
  return (
    <div className="flex flex-col h-screen overflow-hidden">

      {/* Chat */}
      <Chat chatId={id} />
      
      {/* ChatInput */}
      <ChatInput chatId={id}/>
    </div>
  );
}

export default ChatPage;
