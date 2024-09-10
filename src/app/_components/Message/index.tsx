"use client";
import { MessageType } from "@/app/page";
import { format } from "date-fns";

type MessageProps = {
  message: MessageType;
};

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 ml-auto text-yellow"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
};

const MechIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 mr-2 text-teal"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
      />
    </svg>
  );
};

const Message = (props: MessageProps) => {
  const { message } = props;
  console.log(message, "------m");
  return (
    <div
      className={`flex flex-row border-2 border-blue  min-h-20 p-2 rounded-lg flex flex-col relative ${
        message.type === "resp" ? "bg-navy text-pink" : "bg-lightNavy"
      }`}
    >
      <div className="flex flex-row">
        {message.type === "resp" && <MechIcon />}
        <div className="overflow-y-auto">{message.message}</div>
        {message.type === "user" && <UserIcon />}
      </div>

      <div className="absolute right-0 bottom-0 text-xs">
        {format(message.createdAt, "MM/dd/yyyy h:m:s a")}
      </div>
    </div>
  );
};

export default Message;
