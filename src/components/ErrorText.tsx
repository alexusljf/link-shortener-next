import React from "react";

const ErrorText = () => {
  return (
    <div>
      <p style={{ color: "red" }}>
        An error occurred creating the short URL The URL has not been shortened,
        possible errors: Check if the domain is correct Check if the site is
        online Check the address bars and punctuation The URL may be being used
        for spam The URL may have been blocked The URL may have been reported
        The URL was recently shortened The URL is not allowed You shortened many
        URLs in a short time
      </p>
    </div>
  );
};

export default ErrorText;
