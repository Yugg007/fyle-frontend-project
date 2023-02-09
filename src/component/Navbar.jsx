import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [searchInput, setsearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value);
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
      <a style={{ margin: 50, color: 'black' }} href='./science'>Science</a><br />
      <a style={{ margin: 50, color: 'black' }} href='./english'>English</a><br />
      <a style={{ margin: 50, color: 'black' }} href='./history'>History</a><br />
    </div>
  )
}

export default Navbar



