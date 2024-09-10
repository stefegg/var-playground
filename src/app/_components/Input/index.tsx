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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      setValue("");
      const newMesssages = [
        ...messages,
        { type: "user", message: e.currentTarget.value },
      ];
      setMessages(newMesssages);
      setLoading(true);
    }
  };
  return (
    <div
      className={`w-${width} bg-medNavy rounded-xl border-blue border-2 grid grid-cols-12 px-4`}
    >
      <input
        className="w-full rounded-xl h-12 bg-medNavy text-blue col-span-11 outline-none"
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <div className="col-span-1 flex items-center w-full justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-blue -rotate-[24deg]"
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
