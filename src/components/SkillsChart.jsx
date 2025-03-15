import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Tea drinking", value: 95, color: "#82CBC4" },
  { name: "Thinking Design", value: 90, color: "#F4C7C3" },
  { name: "Figma", value: 95, color: "#F4B844" },
  { name: "coding", value: 75, color: "#C49A6C" },
  { name: "Movies", value: 40, color: "#E46666" },
];

const levels = ["Newbie", "Geek", "Ninja", "Jedi"];

const SkillsChart = () => {
  return (
    <div className="w-full h-[400px] p-6 relative bottom-120 ">
      <h2 className="text-2xl font-bold relative bottom-15 ">My Random Skills</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart layout="vertical" data={data} margin={{ left: 50 }}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" width={100} />
          <YAxis
            type="category"
            axisLine={false}
            tickLine={false}
            dataKey="level"
            width={80}
            orientation="left"
            tickFormatter={(value, index) => levels[index] || ""}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="value" barSize={50} radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
