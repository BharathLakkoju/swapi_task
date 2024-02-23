import React from "react";
import "./index.css";
import Pagination from "./components/Pagination";
// import ReactPaginate from "react-paginate";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-slate-800">
        <Pagination />
      </div>
    </>
  );
};

export default App;
