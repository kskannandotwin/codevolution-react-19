import { useState } from "react";

export const ChatGptInput = () => {
  const [name, setName] = useState<string>("");
  return (
    <div className="flex flex-col items-center gap-4 text-2xl">
      <input
        type="text"
        placeholder="Enter your message..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Message : {name}</h2>
    </div>
  );
};
