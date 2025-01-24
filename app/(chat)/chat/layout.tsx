"use client";
import React from "react";

type Props = React.PropsWithChildren<object>;

const ConversationLayout = ({ children }: Props) => {
  return <> {children}</>;
};

export default ConversationLayout;
