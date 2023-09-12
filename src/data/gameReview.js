import htmlParser from "html-react-parser";
import spiderManImg from "../assets/Home/spider-man_miles_morales.png";

const gameReview = {
  title: htmlParser(
    "Spider-Man: Miles Morales <br/> Brings New Dimensions to the Game"
  ),
  shortDescription: "The Game Takes Flight",
  longDescription:
    "Spider-Man: Miles Morales pits players against villains in a gritty New York environment. Features include impressive graphics and an engrossing storyline. Spider-Man: Miles Morales is a thrilling game that casts players in the role of skilled superhero Miles Morales. Players navigate the treacherous streets of NYC, utilizing their agility and cunning to overcome villains and obstacles. With stunning graphics and a captivating storyline, this game delivers an immersive experience like no other.",
  img: spiderManImg,
  imgAlt: "Spider-Man: Miles Morales",
  link: "#0",
};

export default gameReview;
