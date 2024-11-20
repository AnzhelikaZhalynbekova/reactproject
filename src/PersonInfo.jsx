import React, { useState } from "react";

const PersonInfo = () => {
  // State to manage the message visibility
  const [message, setMessage] = useState("");

  // Function to show a message when the button is clicked
  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <div>
      <h1>Person Information</h1>
      <p><strong>Name:</strong> Anzhelika Zhalynbekova</p>
      <p><strong>Job Title:</strong> Software Engineer</p>
      <p><strong>Company:</strong> NASA</p>
      <p><strong>Location:</strong> Washington, USA</p>
      <p><strong>Age:</strong> 28</p>
      <p><strong>Hobbies:</strong> Traveling, Photography, Sky-diving</p>

      {/* Button to trigger the message */}
      <button onClick={handleClick}>Click Me</button>

      {/* Display the message when the button is clicked */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default PersonInfo;
