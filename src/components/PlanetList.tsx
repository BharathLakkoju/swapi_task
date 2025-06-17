import axios from "axios";
import { useEffect, useState } from "react";
// import PlanetCards from "./PlanetCards";
import { HoverEffect } from "./CardHoverEffect";

interface NumberProps {
  pageNumber: number;
}

const PlanetList = ({ pageNumber }: NumberProps) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://swapi.tech/api/planets/?page=${pageNumber}&?format=json`
      );
      const data = await response.data.results;
      setPlanets(data);
    };
    fetchData();
  }, [pageNumber]);
  return (
    <>
      <div>
        <HoverEffect
          items={planets}
          isLoading={planets.length > 0 ? false : true}
        />
      </div>
    </>
  );
};

export default PlanetList;
