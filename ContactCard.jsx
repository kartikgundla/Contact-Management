 
import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const COLORS = [
    { bg: "#e8eeff", text: "#4f6ef7" },
    { bg: "#ede8ff", text: "#764af1" },
    { bg: "#e8f4ff", text: "#2185d0" },
    { bg: "#fff0e8", text: "#e07b39" },
    { bg: "#e8fff4", text: "#1a9e6e" },
  ];
  const color = COLORS[name.charCodeAt(0) % COLORS.length];

  return (
    <div className="item">
      <div
        className="ui avatar image"
        style={{
          background: color.bg,
          color: color.text,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "600",
          fontSize: 15,
        }}
      >
        {initials}
      </div>

      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="delete-icon"
        onClick={() => props.clickHandler(id)}
        title="Delete contact"
      >
        <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
      </svg>
    </div>
  );
};

export default ContactCard;
