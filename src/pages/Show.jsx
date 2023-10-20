import React from 'react'
import showStore from '../stores/showStores'
import { useParams } from 'react-router-dom'
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="Date" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
//   }
// }



export default function Show() {
  

  const store = showStore()
  const params = useParams()

  React.useEffect(()=>{
    store.fetchData(params.id)
  }, [])

  return (
    <div>
        <AreaChart
          width={500}
          height={400}
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </div>
  )
}
