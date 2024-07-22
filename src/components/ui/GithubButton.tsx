import React from "react";
import { Button } from "./button";
import { Github } from "lucide-react";

const GithubButton = () => {
  return (
    <div>
      <a
        href="https://github.com/alexusljf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon">
          <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Github className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">GitHub button</span>
        </Button>
      </a>
    </div>
  );
};

export default GithubButton;
