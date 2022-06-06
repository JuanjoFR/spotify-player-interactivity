import * as React from "react";
import { ImageSourcePropType } from "react-native";
import HomeTemplate from "../pattern-library/templates/home";

interface MostPlayed {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

interface Data {
  mostPlayed: MostPlayed[];
}

const data: Data = {
  mostPlayed: [
    {
      id: "1",
      name: "Seeking Thrills",
      image: require("../assets/images/R-14636565-1578771054-6447.jpg")
    },
    {
      id: "2",
      name: "Humanz",
      image: require("../assets/images/R-10175557-1496076820-7035.jpg")
    },
    {
      id: "3",
      name: "Third",
      image: require("../assets/images/R-1319919-1215840361.jpg")
    },
    {
      id: "4",
      name: "Music Sounds Better With You",
      image: require("../assets/images/R-4087-1228853783.jpg")
    },
    {
      id: "5",
      name: "Exit Planet Dust",
      image: require("../assets/images/R-9130-1520448923-1912.jpg")
    },
    {
      id: "6",
      name: "Vulnicura",
      image: require("../assets/images/R-6793557-1430654646-5820.jpg")
    }
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
