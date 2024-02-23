import React from "react";

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

const PlanetCards: React.FC<PlanetProps> = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  residents,
  films,
  created,
  edited,
  url,
}) => {
  return (
    <>
      <div className="text-white card">
        <h2>{name}</h2>
        <ul>
          <li>Rotation Period: {rotation_period}</li>
          <li>Orbital Period: {orbital_period}</li>
          <li>Diameter: {diameter}</li>
          <li>Climate: {climate}</li>
          <li>Gravity: {gravity}</li>
          <li>Terrain: {terrain}</li>
          <li>Surface Water: {surface_water}</li>
          {residents.length > 0 && (
            <li>
              Residents:
              <ul>
                {residents.map((residentUrl: string) => (
                  <li key={residentUrl}>
                    <a href={residentUrl}>{residentUrl}</a>
                  </li>
                ))}
              </ul>
            </li>
          )}
          {films.length > 0 && (
            <li>
              Films:
              <ul>
                {films.map((filmUrl: string) => (
                  <li key={filmUrl}>
                    <a href={filmUrl}>{filmUrl.split("/").pop()}</a>
                  </li>
                ))}
              </ul>
            </li>
          )}
          <li>Created: {created}</li>
          <li>Edited: {edited}</li>
          <li>
            <a href={url}>More details...</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlanetCards;
