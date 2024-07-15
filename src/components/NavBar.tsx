import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/listPage">
            <p>Links List</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
