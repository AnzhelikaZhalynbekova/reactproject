import React, { useState } from "react";

const PersonInfo = () => {
  // State for the message
  const [message, setMessage] = useState("");
  
  // State for the job title
  const [jobTitle, setJobTitle] = useState("Software Engineer");

  // Function to handle button click
  const handleClick = () => {
    setMessage("Button was clicked!");
    setJobTitle("Senior Software Engineer");
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

      {/* Display the message above the button */}
      {message && <p>{message}</p>}

      {/* Change button text to 'Повысить в должности' */}
      <button onClick={handleClick}>Повысить в должности</button>
    </div>
  );
};

export default PersonInfo;
