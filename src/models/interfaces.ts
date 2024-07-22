import { Dispatch, SetStateAction } from "react";

export interface LoginDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  currentUser: boolean;
  logout: () => void;
  setUsername: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleLogin: () => void;
}
