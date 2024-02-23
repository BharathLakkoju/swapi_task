import axios from "axios";
import { useEffect, useState } from "react";
// import PlanetCards from "./PlanetCards";
import { HoverEffect } from "./CardHoverEffect";

interface NumberProps {
  pageNumber: number;
}

// interface PlanetProps {
//   name: string;
//   rotation_period: string;
//   orbital_period: string;
//   diameter: string;
//   climate: string;
//   gravity: string;
//   terrain: string;
//   surface_water: string;
//   residents: string[];
//   films: string[];
//   created: string;
//   edited: string;
//   url: string;
// }

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
      <div>
        <HoverEffect items={planets} />
      </div>
    </>
  );
};

export default PlanetList;
