import { useState } from "react";

export const ChatGptToggle = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-4 text-2xl">
      <h2>Is On: {isOn ? "Active" : "Inactive"}</h2>
      <button
        className="cursor-pointer"
        onClick={() => setIsOn((prev) => !prev)}
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};
