import { Starship } from "./Starship"
import type { Planet } from "./Planet";
import { calculateFlightDurationFromEarth } from "./utils/flightCalculator";


const planets: Planet[] = [
    { name: "Mercure", distanceFromEarth: 91.7 },
    { name: "Vénus", distanceFromEarth: 41.4 },
    { name: "Terre", distanceFromEarth: 0 },
    { name: "Mars", distanceFromEarth: 54.6 },
    { name: "Jupiter", distanceFromEarth: 588 },
    { name: "Saturne", distanceFromEarth: 1200 },
    { name: "Uranus", distanceFromEarth: 2570 },
  ];

  const sortByDistance = [...planets].sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
  console.log("Ordre croissant de la distance de chaque planète à la Terre : ", sortByDistance);

  const sortByAlphabetic = [...planets].sort((a,b) => a.name.localeCompare(b.name))
  console.log("Ordre alphabétique des planètes : ", sortByAlphabetic);

  const sortByAlphabeticDecroissant = [...planets].sort((a,b) => b.name.localeCompare(a.name))
  console.log("Ordre alphabétique des planètes : ", sortByAlphabeticDecroissant);

  const initialValue= 0;

  const sumWithInitial = planets.reduce((accumulator,planets)=> accumulator+ planets.distanceFromEarth, initialValue)/(planets.length-1);
  console.log("Distance moyenne de la Terre aux 7 autres planètes du système solaire: ", sumWithInitial);
