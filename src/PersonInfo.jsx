// src/PersonInfo.jsx
import React, { useState } from "react";

const PersonInfo = () => {
  const [message, setMessage] = useState("");
  const [jobTitle, setJobTitle] = useState("Software Engineer");

  const handleClick = () => {
    setMessage("Button was clicked!");
    setJobTitle(prevJobTitle =>
      prevJobTitle === "Software Engineer" ? "Chief Technical Officer" : "Software Engineer"
    );
  };

  return (
    <div>
      <h1>Person Information</h1>
      <p><strong>Name:</strong> Anzhelika Zhalynbekova</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Company:</strong> NASA</p>
      <p><strong>Location:</strong> Washington, USA</p>
      <p><strong>Age:</strong> 28</p>
      <p><strong>Hobbies:</strong> Traveling, Photography, Sky-diving</p>

      {message && <p>{message}</p>}

      <button onClick={handleClick}>Повысить в должности</button>
    </div>
  );
};

export default PersonInfo;
