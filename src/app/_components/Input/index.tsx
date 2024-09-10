"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { MessageType } from "@/app/page";

type InputProps = {
  width: string;
  messages: MessageType[];
  setMessages: Dispatch<SetStateAction<MessageType[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const Input = (props: InputProps) => {
  const [value, setValue] = useState("");
  const { width, messages, setMessages, loading, setLoading } = props;

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const regEx = /[a-z]/g;

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await sendMessage(e.currentTarget.value);
    }
  };

  const sendMessage = async (val: string) => {
    if (!loading && regEx.test(val.toLowerCase())) {
      setValue("");
      const userMsg = {
        type: "user",
        message: val,
        createdAt: new Date(),
      };
      let newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setLoading(true);
      await delay(2000);
      newMessages = [
        ...messages,
        userMsg,
        { type: "resp", message: "I am a response!", createdAt: new Date() },
      ];
      setMessages(newMessages);
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-${width} bg-medNavy rounded-xl border-blue border-2 grid grid-cols-12 px-4`}
    >
      <textarea
        className="w-full rounded-xl h-12 bg-medNavy text-blue col-span-11 outline-none"
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
        rows={4}
      />
      <div className="col-span-1 flex items-center w-full justify-end cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-blue -rotate-[24deg] hover:text-teal"
          onClick={() => sendMessage(value)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Input;
