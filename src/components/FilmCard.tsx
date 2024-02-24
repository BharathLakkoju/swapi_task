import { useState, useEffect } from "react";
import axios from "axios";

interface ApiResponse {
  title: string;
  director: string;
  producer: string;
  release_date: string;
}

const FilmCard = ({ urls }: { urls: string[] }) => {
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
        <p>No Films</p>
      ) : (
        <div>Films ({apiData.length})</div>
      )}
      <div className="flex overflow-x-scroll hide-scroll-bar">
        {apiData.map((data, index) => (
          <div
            className="flex py-5 pr-5 flex-nowrap hide-scroll-bar"
            key={index}
          >
            <div className="w-[300px] flex flex-wrap bg-slate-800 p-4 rounded-md flex-col gap-y-[2px]">
              <p>
                <span>Film: </span>
                <span>{data.title}</span>
              </p>
              <p>
                <span>Release Date: </span>
                <span>{data.release_date}</span>
              </p>
              <p>
                <span>Director: </span>
                <span>{data.director}</span>
              </p>
              <p>
                <span>Producer: </span>
                <span>{data.producer}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmCard;
