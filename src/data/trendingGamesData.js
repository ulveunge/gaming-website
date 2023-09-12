import crysis2Img from "../assets/Home/TrendingGames/crysis_2.jpg";
import cyberpunk2077 from "../assets/Home/TrendingGames/cyberpunk_2077.jpg";
import forHomorImg from "../assets/Home/TrendingGames/for_honor.jpg";
import leagueOfLegendsImg from "../assets/Home/TrendingGames/league_of_legends.jpg";
import strayImg from "../assets/Home/TrendingGames/stray.jpg";
import uniqid from "uniqid";

const trendingGames = [
  {
    id: uniqid(),
    gameName: "For Honor",
    followers: 40,
    img: forHomorImg,
    link: "#0",
  },
  {
    id: uniqid(),
    gameName: "League Of Legends",
    followers: 170,
    img: leagueOfLegendsImg,
    link: "#0",
  },
  {
    id: uniqid(),
    gameName: "Crysis 2",
    followers: 25,
    img: crysis2Img,
    link: "#0",
  },
  {
    id: uniqid(),
    gameName: "Stray",
    followers: 91,
    img: strayImg,
    link: "#0",
  },
  {
    id: uniqid(),
    gameName: "Cyberpunk 2077",
    followers: 201,
    img: cyberpunk2077,
    link: "#0",
  },
];

export default trendingGames;
