import { Link, Copy } from "lucide-react";
import React from "react";
import IconButton from "../../components/icon-button";
import { InputRoot, InputIcon, InputField } from "../../components/input";

export const InviteLinkImport = () => {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue="http://localhost/3000/invite/1231" />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
};
