import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';


function CandlesPage() {
    // Use the useParams hook to get the 'id' parameter from the URL
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/candles/${id}/60`).then(
                    res => res.json()
                ).then(
                    data => {
                        setData(data)
                        // console.log(data)
                    
            // const candleData = response.data; // Assuming the data is an array of arrays
    
            // Format the data for the candlestick chart
            console.log(data)

        })
        }, []);
    
    console.log(data)
    
    const formattedData = data.map(([timestamp, low, high, open, close, volume]) => (
        [new Date(timestamp*1000), low, open, close, high]
        ));

        formattedData.unshift(["Time", "Low", "High", "Open", "Close"])

        console.log(formattedData)

        const options = {
            legend: "none",
            };

    const handleClick = (granularity) => {
        //   setClicked();
        //   console.log(`/candles/${id}`)
            fetch(`/candles/${id}/${granularity}`).then(
            res => res.json()
            ).then(
                data => {
                    setData(data)
                    console.log(data)
                }
            )
            const formattedData = data.map(([timestamp, low, high, open, close, volume]) => (
                [new Date(timestamp * 1000), low, open, close, high]
                ));
        
                formattedData.unshift(["Time", "Low", "High", "Open", "Close"])
        };

    return (
        <><div>
            <h1>{id}</h1>
            <p></p> {
            }
        </div>
        <div>
            <Chart
                chartType="CandlestickChart"
                width="100%"
                height="400px"
                data={formattedData}
                options={options}
                />
        </div>
        <div>
            <p>
                Intervals 
                <ul>
                    <li onClick={() => handleClick(60)}>
                        1 Minute
                    </li>
                    <li onClick={() => handleClick(300)}>
                        5 Minutes
                    </li>
                    <li onClick={() => handleClick(900)}>
                        15 Minute
                    </li>
                    <li onClick={() => handleClick(3600)}>
                        1 Hour
                    </li>
                    <li onClick={() => handleClick(21600)}>
                        6 Hour
                    </li>
                    <li onClick={() => handleClick(86400)}>
                        1 Day
                    </li>
                </ul>
            </p>
        </div>
        <div>
            <Link to="/">Home</Link>
        </div>
        </>
    );
}

export default CandlesPage;