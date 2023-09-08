# Silver8 Take Home Test submission - Lib Kai Pneh

This project uses a React frontend and a Flask backend containerized within Docker containers.

## Getting Started

In order to setup the project, please run

### `docker compose up`

Which will build the required backend and frontend Docker containers.\
Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

The page will show a list of trading pairs obtained from the coinbase API.\
Additionally, each product is clickable which will reroute you to the candlestick graph of the specific product.

In the candlestick page, you will be able to select different granularities available which will change the graph accordingly.

## Known issues and possible fixes

- The start and end date selector has not been implemented due to time constraints.
- The candlestick data returned is limited to 300 data points.
> Implement the start and end time and retrieve the candlestick data. 

> Store the data and use the max timestamp of the data and call the API using the max timestamp as the start date and the end date the user selected as the end date. 

> Call repeatedly until the max timestamp in the data is greater than or equal to the end date selected

- The API authentication was implemendted but it returned invalid api key
> Unsure how to fix this and would appreciate any at all suggestions regarding this

- The pages could look better to allow for more friendly user interaction.
- The candlestick graph tooltip is ordered Low, Open, High, Close but does not indicate which value is which
> Could customize tooltips or use another package for the graph to allow for better tooltips and customization

## Testing Plan
The testing plan could be found in the project directory under the name TestingPlan.xlsx

## Backend API endpoints
- /tradingPairs to obtain all products
- /candles/{id}/{granularity} to obtain candlestick data of a particular product with specified granularity