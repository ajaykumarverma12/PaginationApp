import React from 'react'

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num+1);
  return (
    <div style={{textAlign:'center'}}>
      { pages.map(num => (
        <button style={{marginLeft:'10px'}}
          key={num}
          onClick={() => handleClick(num)}
        >{num}</button>
      )) }
    </div>
  )
}

export default Pagination
