// project2/src/index.js
import React, { useState } from 'react';

const Project2 = () => {
  const [phrase, setPhrase] = useState("Initial Phrase");
  console.log("Project2 Component is executing");

  const handleUpdatePhrase = () => {
    const newPhrase = "Updated Phrase from Child";
    window.parent.postMessage({ type: "phraseUpdated", phrase: newPhrase }, "*");
  };

  return (
    <div>
      <h2>Child</h2>
      <button onClick={handleUpdatePhrase}>Update Phrase in Parent</button>
      <p>{phrase}</p>
    </div>
  );
};

window.Project2Component = { default: Project2 };
console.log("Project2Component attached to window:", !!window.Project2Component);
