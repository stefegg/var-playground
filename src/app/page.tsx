"use client";
import { useState } from "react";
import Input from "./_components/Input";
import Message from "./_components/Message";
import LoadingDots from "./_components/LoadingDots";

export type MessageType = {
  type: string;
  message: string;
  createdAt: Date;
};

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="flex flex-col px-12 h-full py-8 gap-4">
      <div className="max-h-5/6 h-full flex-1 overflow-y-auto bg-medNavy rounded-xl px-4 flex flex-col-reverse pt-4">
        <div className="mt-auto space-y-6">
          {messages &&
            messages.map((m, idx) => <Message key={idx} message={m} />)}
          <div className="h-4">{loading && <LoadingDots />}</div>
        </div>
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
