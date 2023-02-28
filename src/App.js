import React from 'react'; 
import { Area, ComposedChart, Line, LineChart, Tooltip, Legend, XAxis, CartesianGrid, YAxis, ResponsiveContainer, Bar } from 'recharts';
import './App.css';

function App() {
  const data=[
{
  name:'Donuts',
  sale:2000,
  profit:6000,
  customer:1900
},
{
  name:'Cakes',
  sale:7000,
  profit:1300,
  customer:5000
},
{
  name:'Coffee',
  sale:9000,
  profit:1590,
  customer:4100,
},
{
  name:'Tea',
  sale:1000,
  profit:6031,
  customer:6100
},
  ];
  
  return (
    <div className="App">
 <h1>ReCharts</h1>  

 <h2>Composed Chart</h2>
 <ResponsiveContainer width="80%" aspect={3}>
 <ComposedChart width={730} height={250} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="profit" fill="blue" stroke="#8884d8" />
  <Bar dataKey="sale" barSize={20} fill="green"/>
  <Line type="monotone" dataKey="customer" stroke="#ff7300" />
</ComposedChart>
        
      </ResponsiveContainer>
  
<h2>Line Chart</h2>
<ResponsiveContainer width="80%" aspect={3}>
        <LineChart data={data}>
          <XAxis dataKey="name" interval="preserveStartEnd"/>
          <YAxis/>
          <Line  dataKey="sale" stroke="green" strokeWidth={2} />
          <Line  dataKey="profit" stroke="red" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  );
}

export default App;
