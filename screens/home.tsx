import * as React from "react";
import { ImageSourcePropType } from "react-native";
import HomeTemplate from "../pattern-library/templates/home";

interface Preview {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

interface Data {
  mostPlayed: Preview[];
  madeForYou: Preview[];
  recentlyPlayed: Preview[];
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
  ],
  madeForYou: [
    {
      id: "1",
      name: "Jam & Spoon, Blue Pearl, A Touch Of Class, Ultra Nate, Oceanic, De'Lacy, Brothers In Rhythm, 2 Unlimited, Snap",
      image: require("../assets/images/Photo-from-Deposit-Photos.jpg")
    },
    {
      id: "2",
      name: "Beastie Boys, Front Line Assembly, Stanford Prison Experiment, The Murmurs, Smashing Orange, Velo Deluxe",
      image: require("../assets/images/739d013c-95b8-4edd-89ad-d536e65de2a6_rw_1920.jpg")
    },
    {
      id: "3",
      name: "RPM, One Cut, Beanz, Purple Penguin, Atari Safari (2), Numskullz, Junior Disprol",
      image: require("../assets/images/53905caa-02d4-4176-97e0-21c7e288628b_rw_1920.jpg")
    },
    {
      id: "4",
      name: "Wilco, Spiritualized, Emmylou Harris, Nick Cave & The Bad Seeds, The Flaming Lips, Weyes Blood",
      image: require("../assets/images/db38f0be-2b2b-44a5-92f9-6fc30dff5110_rw_1920.jpg")
    },
    {
      id: "5",
      name: "Gerry Rafferty, Sounds Of Blackness, David Guetta, Degrees Of Motion, Break Machine, Chanelle, Sigala",
      image: require("../assets/images/2c340c65-c161-4ec1-b827-ad7fdd2475c0_rw_1920.jpg")
    },
    {
      id: "6",
      name: "Pet Shop Boys, Deee-Lite, Mr. Vegas, Madonna, Sade, Debbie Pender, Trammps, Ellie Goulding",
      image: require("../assets/images/spotify-playlist-cover-smokey-blue-guitar-032322.jpg")
    }
  ],
  recentlyPlayed: [
    {
      id: "1",
      name: "Born to Die",
      image: require("../assets/images/R-3400121-1620336413-9316.jpeg")
    },
    {
      id: "2",
      name: "Demon Days",
      image: require("../assets/images/R-844904-1164712778.jpeg")
    },
    {
      id: "3",
      name: "Maxinquaye",
      image: require("../assets/images/R-55161-1366037219-3361.jpeg")
    },
    {
      id: "4",
      name: "Psyence Fiction",
      image: require("../assets/images/R-309316-1556853077-6974.jpeg")
    },
    {
      id: "5",
      name: "1. Outside (The Nathan Adler Diaries: A Hyper Cycle)",
      image: require("../assets/images/R-256507-1188750879.jpeg")
    },
    {
      id: "6",
      name: "If You Wait",
      image: require("../assets/images/R-4899488-1579199404-7648.jpeg")
    },
    {
      id: "7",
      name: "Telegram",
      image: require("../assets/images/R-3650-1469133260-1175.jpeg")
    },
    {
      id: "8",
      name: "The Last Resort",
      image: require("../assets/images/R-830189-1265162680.jpeg")
    },
    {
      id: "9",
      name: "Endtroducing.....",
      image: require("../assets/images/R-5058-1549778735-1171.jpeg")
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
