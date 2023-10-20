import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    fontWeight: "bold",
    color: "#fff",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;