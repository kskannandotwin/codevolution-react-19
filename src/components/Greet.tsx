type GreetProps = {
  name: string;
  messageCount: number;
};

export const Greet = ({ name, messageCount }: GreetProps) => {
  return (
    <h1>
      Hello {name} and you have {messageCount} unread messages
    </h1>
  );
};
