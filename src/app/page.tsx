"use client";
import { useState } from "react";
import Input from "./_components/Input";
import Message from "./_components/Message";

export type MessageType = {
  type: string;
  message: string;
};

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="flex flex-col px-12 h-full py-8">
      <div className="bg-red h-5/6 overflow-auto flex flex-col justify-end">
        {messages &&
          messages.map((m, idx) => <Message key={idx} message={m} />)}
      </div>
      <div className="h-1/6 flex items-center">
        <Input
          width="full"
          messages={messages}
          setMessages={setMessages}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}
