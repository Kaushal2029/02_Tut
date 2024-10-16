import React from "react";

function Footer({ lenght }) {
  return (
    <footer>
      <p>
        {lenght} List {lenght === 1 ? "item" : "items"}
      </p>
    </footer>
  );
}

export default Footer;
