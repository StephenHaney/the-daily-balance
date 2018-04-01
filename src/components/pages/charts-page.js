import React, { } from 'react';
import { ResponsiveContainer, XAxis, YAxis, LineChart, Line } from 'recharts';
import { ResponsivePie } from 'nivo'

function ChartsPage() {
  return(
    <div>

      <div className="chart-card">
        <h4>My mood over the last 7 days</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[{name: 'a', value: 3},{name: 'b', value: 1},{name: 'c', value: 3},{name: 'd', value: 3},{name: 'e', value: 2},{name: 'f', value: 2},{name: 'g', value: 3}]}>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card" style={{height: '400px'}}>
        <h4>Where I've spent my energy</h4>
        <ResponsivePie
          data={[
    {
      "id": "friends",
      "label": "friends",
      "value": 345,
      "color": "hsl(80, 70%, 50%)"
    },
    {
      "id": "family",
      "label": "family",
      "value": 209,
      "color": "hsl(215, 70%, 50%)"
    },
    {
      "id": "partner",
      "label": "partner",
      "value": 166,
      "color": "hsl(86, 70%, 50%)"
    },
    {
      "id": "career",
      "label": "career",
      "value": 460,
      "color": "hsl(214, 70%, 50%)"
    },
    {
      "id": "hobbies",
      "label": "hobbies",
      "value": 199,
      "color": "hsl(107, 70%, 50%)"
    },
    {
      "id": "home",
      "label": "home",
      "value": 265,
      "color": "hsl(63, 70%, 50%)"
    },
    {
      "id": "exercise",
      "label": "make",
      "value": 180,
      "color": "hsl(252, 70%, 50%)"
    },
    {
      "id": "nutrition",
      "label": "nutrition",
      "value": 10,
      "color": "hsl(252, 70%, 50%)"
    },
    {
      "id": "spirituality",
      "label": "spirituality",
      "value": 60,
      "color": "rgb(33,33,33)"
    },
  ]}
          margin={{
              "top": 40,
              "right": 80,
              "bottom": 80,
              "left": 80
          }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          //colors="d320c"
          //colorBy="id"
          borderColor="inherit:darker(0.6)"
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="inherit"
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
              {
                  "anchor": "bottom",
                  "direction": "row",
                  "translateY": 56,
                  "itemWidth": 100,
                  "itemHeight": 14,
                  "symbolSize": 14,
                  "symbolShape": "circle"
              }
          ]}
        />
      </div>
    </div>
  )
}

export default ChartsPage;