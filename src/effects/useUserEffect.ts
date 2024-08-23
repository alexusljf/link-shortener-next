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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const openLogin = () => {
    setCreationOpen(false);
    setErrorMessage(null);
    setLoginOpen(true);
  };
  const openUserCreation = () => {
    setLoginOpen(false);
    setErrorMessage(null);
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
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
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
      setCreationOpen(false);
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
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
    setErrorMessage("");
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
    errorMessage,
    closeModal,
  };
};

export default useUserEffect;
