import { useEffect, useState } from "react";
import axios from "axios";

interface ApiResponse {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
}

const ResidentCard = ({ urls }: { urls: string[] }) => {
  const [apiData, setApiData] = useState<ApiResponse[]>([]);

  useEffect(() => {
    if (urls.length > 0) {
      const fetchData = async () => {
        const responseDataArray: ApiResponse[] = [];
        for (const url of urls) {
          const response = await axios.get<ApiResponse>(url);
          responseDataArray.push(response.data);
        }
        setApiData(responseDataArray);
      };
      fetchData();
    }
  }, [urls]);

  return (
    <div>
      {urls.length === 0 ? (
        <p>No Residents</p>
      ) : (
        <div>Residents ({apiData.length})</div>
      )}
      <div className="flex overflow-x-scroll hide-scroll-bar">
        {apiData.map((data, index) => (
          <div
            className="flex py-5 pr-5 flex-nowrap hide-scroll-bar"
            key={index}
          >
            <div className="w-[200px] flex flex-col flex-wrap p-3 bg-indigo-950 rounded-lg gap-y-[2px]">
              <p>
                <span>Name: </span>
                <span className="text-blue-300">{data.name}</span>
              </p>
              <p>
                <span>Birth Year: </span>
                <span className="text-blue-300">{data.birth_year}</span>
              </p>
              <p>
                <span>Gender: </span>
                <span className="text-blue-300">{data.gender}</span>
              </p>
              <p>
                <span>Height: </span>
                <span className="text-blue-300">{data.height}</span>
              </p>
              <p>
                <span>Mass: </span>
                <span className="text-blue-300">{data.mass}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentCard;
