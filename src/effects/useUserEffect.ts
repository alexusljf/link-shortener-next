"use client";
import { User } from "@/models/interfaces";
import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";

const useUserEffect = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [creationOpen, setCreationOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [creationErrorMessage, setCreationErrorMessage] = useState<
    string | null
  >(null);
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const openLogin = () => {
    setCreationOpen(false);
    setCreationErrorMessage(null); // Reset creation error
    setLoginErrorMessage(null); // Reset login error
    setLoginOpen(true);
  };

  const openUserCreation = () => {
    setLoginOpen(false);
    setLoginErrorMessage(null); // Reset login error
    setCreationErrorMessage(null); // Reset creation error
    setCreationOpen(true);
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post("/api/login", {
        username: username,
        password: password,
      });
      const loggedInUser: User = response.data.user;
      console.log(loggedInUser);
      setCurrentUser(loggedInUser);
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      setLoginOpen(false);
      window.location.reload();
    } catch (error: any) {
      if (error.response) {
        setLoginErrorMessage(error.response.data.message);
      } else {
        setLoginErrorMessage("An unexpected error occurred.");
      }
    }
  };

  const createUser = async (
    name: string,
    userName: string,
    password: string
  ) => {
    try {
      const response = await axios.post("/api/createUser", {
        name: name,
        userName: userName,
        password: password,
      });
      const createdUser = response.data.newUserObj;
      console.log(createdUser);
      setCurrentUser(createdUser);
      localStorage.setItem("currentUser", JSON.stringify(createdUser));
      setCreationOpen(false);
      window.location.reload();
    } catch (error: any) {
      if (error.response) {
        setCreationErrorMessage(error.response.data.message);
      } else {
        setCreationErrorMessage("An unexpected error occurred.");
      }
    }
  };

  const handleLogin = () => login(username, password);
  const handleCreate = () => createUser(name, username, password);

  const logout = () => {
    setCurrentUser(undefined);
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  const closeModal = () => {
    setCreationErrorMessage(null);
    setLoginErrorMessage(null);
  };

  return {
    loginOpen,
    setLoginOpen,
    creationOpen,
    setCreationOpen,
    currentUser,
    login,
    openUserCreation,
    openLogin,
    handleLogin,
    handleCreate,
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    logout,
    createUser,
    creationErrorMessage,
    loginErrorMessage,
    closeModal,
  };
};

export default useUserEffect;
