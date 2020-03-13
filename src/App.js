import React from "react";

import JobApplication from "./components/JobApplication";

import "react-bulma-components/dist/react-bulma-components.min.css";
import "App.scss";

import "typeface-roboto";

function App() {
  const user = {
    name: "Richard Smith",
    isPremium: true,
    match: 70,
    location: "Los Angeles, CA",
    description: "I’m an experienced editor and I bring talent and a good attitude to the edit.",
    jobs: [
      {
        id: 1,
        position: "Line Producer",
        title: "Big Brother (Season 8)",
        year: "2019",
        category: "TV Reality/Doc",
        company: "CBS - Our House Productions"
      },
      {
        id: 2,
        position: "Line Producer",
        title: "Big Brother (Season 8)",
        year: "2019",
        category: "TV Reality/Doc",
        company: "CBS - Our House Productions"
      },
      {
        id: 3,
        position: "Line Producer",
        title: "Big Brother (Season 8)",
        year: "2019",
        category: "TV Reality/Doc",
        company: "CBS - Our House Productions"
      }
    ],
    connections: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    credits: 12
  };

  return (
    <div className="App">
      <JobApplication user={user} />
    </div>
  );
}

export default App;
