"use client";

import { Button } from "@radix-ui/themes";

import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return <Button onClick={() => signOut()} className="cursor-pointer">Logout</Button>;
};

export default LogoutBtn;
