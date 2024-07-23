"use client";
import { useState } from "react";

const useUserEffect = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const login = (username: string, password: string) => {
    if (username === "" && password === "") {
      setCurrentUser(true);
      console.log("logged in");
      closeModal();
    } else {
      console.error("Invalid credentials");
    }
  };

  const handleLogin = () => login(username, password);

  const logout = () => setCurrentUser(false);

  return {
    open,
    setOpen,
    currentUser,
    login,
    openModal,
    closeModal,
    handleLogin,
    username,
    setUsername,
    password,
    setPassword,
    logout,
  };
};

export default useUserEffect;
