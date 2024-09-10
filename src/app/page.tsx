"use client";
import { useState } from "react";
import Input from "./_components/Input";
import Message from "./_components/Message";
import LoadingDots from "./_components/LoadingDots";

export type MessageType = {
  type: string;
  message: string;
};

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="flex flex-col px-12 h-full py-8">
      <div className="bg-medNavy rounded-xl px-4 h-5/6 max-h-5/6 overflow-y-auto flex flex-col justify-end py-2 space-y-6">
        {messages &&
          messages.map((m, idx) => <Message key={idx} message={m} />)}
        <div className="h-4">{loading && <LoadingDots />}</div>
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
