type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <>
      <h2>
        {isLoggedIn ? `Welcome back ${name}` : "Welcome Guest"}
        <br />
        Hello {isLoggedIn && name}, you have {messageCount} unread messages
      </h2>
    </>
  );
};
