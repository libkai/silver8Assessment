import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyButton() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/tradingPairs").then(
        res => res.json()
    ).then(
        data => {
            setData(data)
            console.log(data)
        }
    )
  }, [])

const [product, setProduct] = useState([{}]);

// Event handler function to update the state when the paragraph is clicked
const handleClick = (id) => {
  fetch(`/candles/${id}/60`).then(
    res => res.json()
    ).then(
        product => {
            setProduct(product)
            console.log(product)
        }
    )
};

  return (
  <div>
        {data.map(
            (d) => (
                <p>
                    <Link to={`/candles/${d[0]}`} key={d[0]} onClick={() => handleClick(d[0])}>{d[1]}</Link>
                </p>
            ))}
  </div> );
}


export default MyButton;