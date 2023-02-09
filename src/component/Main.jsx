import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Main = () => {
  const [inputTyped, setinputTyped] = useState("");
  const [pageNumber, setpageNumber] = useState(1);
  const [data, setdata] = useState();
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setisLoading] = useState(false);

  const handleClickSearch = async () => {
    setisLoading(true);
    const input = localStorage.getItem('input');
    const url = `https://openlibrary.org/search.json?q=${input}&limit=100`;
    const urlData = await axios.get(url);
    setdata(urlData?.data?.docs);
    setisLoading(false);
  };

  const handleClick = () => {
    localStorage.setItem('input', inputTyped);
    handleClickSearch();
  }

  useEffect(() => {
    const path = window.location.pathname;
    if (path.length > 0) {
      localStorage.setItem('input', path.slice(1));
      handleClickSearch()
    }
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setinputTyped(e.target.value);
  };

  const currentData = data ? (data?.length > ((pageNumber - 1) * pageSize + pageNumber*pageSize)) ? data?.slice((pageNumber - 1) * pageSize, pageNumber*pageSize) : []
  : [];

  const handlePrev = () => {
    if (pageNumber > 1) {
      setpageNumber(pageNumber - 1);
    }
  };
  const handleNext = () => {
    if (pageNumber < Math.ceil(data?.length / pageSize) && currentData) {
      setpageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}>
        <input type="search" placeholder={inputTyped} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </div>
      <hr />

      <table style={{ border: "1px solid", width: "100%", textAlign: "left" }}>
        <thead style={{ borderBottom: "1px solid", backgroundColor: 'green' }}>
          <tr>
            <td style={{ padding: "10px" }}>Title and Sub Title</td>
            <td style={{ padding: "10px" }}>Author</td>
            <td style={{ padding: "10px" }}>Latest Publish Year</td>
            <td style={{ padding: "10px" }}>First Publish Year</td>
          </tr>
        </thead>
        {!isLoading &&
          <tbody>
            {currentData && currentData.length > 0 && currentData?.map((res, index) => (
              (index < currentData?.length-1 && res && res.author_name && res.publish_date) && (
                <tr key={index}>
                  <td style={{ padding: "10px" }}>{res?.title ? res.title : ""}</td>
                  <td style={{ padding: "10px" }}>{res?.author_name[0] ? res.author_name[0] : ""}</td>
                  <td style={{ padding: "10px" }}>{res?.publish_date[0] ? res.publish_date[0] : ""}</td>
                  <td style={{ padding: "10px" }}>{res?.first_publish_year ? res.first_publish_year : ""}</td>
                </tr>)
            ))}



          </tbody>
        }
      </table>
      {isLoading && <h2>Loading...</h2>}

      <div className="App">
        <button onClick={handlePrev}> Prev </button>
        {currentData.length === 0 && !isLoading ? <>Nothing to show next.</> : <button onClick={handleNext}> Next </button>}
      </div>
    </div>
  );
};

export default Main;
