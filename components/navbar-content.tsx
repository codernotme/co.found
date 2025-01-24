import React from "react";
import AddFriendDialog from "./AddFriendDialog";
import Notification from "./notification/page";
import NavbarConvo from "./NavbarChat";

export default function NavCont() {
  return (
    <div className="flex flex-row p-2 align-middle items-center">
      <AddFriendDialog />
      <NavbarConvo />
      <Notification />
    </div>
  );
}
