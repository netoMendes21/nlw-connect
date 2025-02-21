"use client";

import { Link, Copy } from "lucide-react";
import React from "react";
import IconButton from "../../../components/icon-button";
import { InputRoot, InputIcon, InputField } from "../../../components/input";

interface InviteLinkImportProps {
  inviteLink: string;
}

export function InviteLinkImport({ inviteLink }: InviteLinkImportProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
