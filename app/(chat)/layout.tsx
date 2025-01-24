import React from "react";

type Props = React.PropsWithChildren<object>;

const layout = ({ children }: Props) => {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col ">
        <div className="flex flex-row w-full p-2 gap-4 h-full">{children}</div>
      </main>
    </>
  );
};

export default layout;
