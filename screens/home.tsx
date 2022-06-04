import * as React from "react";
import HomeTemplate from "../pattern-library/templates/home";

interface MostPlayed {
  id: string;
  name: string;
}

interface Data {
  mostPlayed: MostPlayed[];
}

const data: Data = {
  mostPlayed: [
    { id: "1", name: "Fake name 1" },
    { id: "2", name: "Fake name 2" },
    { id: "3", name: "Fake name 3" },
    { id: "4", name: "Fake name 4" },
    { id: "5", name: "Fake name 5" },
    { id: "6", name: "Fake name 6" }
  ]
};

function Home() {
  function handleNotificationsPress() {
    console.log("handle nontifications press");
  }

  function handleRecentlyPlayedPress() {
    console.log("handle recently played press");
  }

  function handleSettingsPress() {
    console.log("handle settings press");
  }

  return (
    <HomeTemplate
      data={data}
      onNotificationsPress={handleNotificationsPress}
      onRecentlyPlayedPress={handleRecentlyPlayedPress}
      onSettingsPress={handleSettingsPress}
    />
  );
}

export default Home;
