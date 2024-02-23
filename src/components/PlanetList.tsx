import axios from "axios";
import { useEffect, useState } from "react";
import PlanetCards from "./PlanetCards";

interface NumberProps {
  pageNumber: number;
}

interface PlanetProps {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const PlanetList = ({ pageNumber }: NumberProps) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://swapi.dev/api/planets/?page=${pageNumber}&?format=json`
      );
      const data = await response.data.results;
      setPlanets(data);
    };
    fetchData();
  }, [pageNumber]);
  return (
    <>
      {planets.map((item: PlanetProps) => (
        <div key={item.url}>
          <PlanetCards
            name={item.name}
            rotation_period={item.rotation_period}
            orbital_period={item.orbital_period}
            diameter={item.diameter}
            climate={item.climate}
            gravity={item.gravity}
            terrain={item.terrain}
            surface_water={item.surface_water}
            residents={item.residents}
            films={item.films}
            created={item.created}
            edited={item.edited}
            url={item.url}
          />
        </div>
      ))}
    </>
  );
};

export default PlanetList;
