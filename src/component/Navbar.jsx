import React from 'react'
import { useState } from 'react'
import axios from 'axios';


const Navbar = () => {
  const [searchInput, setsearchInput] = useState("");
  const subject = [
    { name: "Javascript" },
    { name: "Java" },
    { name: "English Communication" },
    { name: "History" },
    { name: "Data Structure and Algorithm" },
  ]

  const handleChange = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value);
  }

  const getSub = (subject, searchInput) => {
    if (searchInput.length > 0) {
      const currentSub = subject.filter((sub) => {
        return sub.name.match(searchInput);
      })
      return currentSub;
    }
    return subject;
  }

  const list = getSub(subject, searchInput).map((sub) => {
    return <div style={{ marginBottom: 20 }}>
      <li>rtgsrt</li>
      <br />
    </div>
  })

  const handleClick = () => {
    console.log("Api call")
    axios.get('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
      .then((res) => {
        console.log(res);
      })

  }

  return (
    <div style={{ margin: 20, height: 670 }}>
      <h3>Trending Subjects</h3>
      <br />
      <input
        name='searchSubjext'
        type='search'
        onChange={handleChange}
        placeholder='Search Subject'
        value={searchInput} />
      <br />
      <br />
      <h4>Subject -</h4>
      <a style={{ margin: 50, color: 'black' }} href='./javascript'>Javascript</a><br />
      <a style={{ margin: 50, color: 'black' }} href='./java'>Java</a><br />
      <a style={{ margin: 50, color: 'black' }} href='./english'>English</a><br />
      <a style={{ margin: 50, color: 'black' }} href='./history'>History</a><br />






    </div>
  )
}

export default Navbar



