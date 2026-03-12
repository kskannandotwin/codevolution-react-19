type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = <h2>Loading...</h2>;
  } else if (props.status === "success") {
    message = <h2>Data fetched successfully</h2>;
  } else if (props.status === "error") {
    message = <h2>Error fetching data</h2>;
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
