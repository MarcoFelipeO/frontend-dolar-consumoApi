// src/components/DolarChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useDolar } from '../context/DolarContext';

export default function DolarChart() {
  const { data } = useDolar();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="valor" stroke="#1976d2" />
      </LineChart>
    </ResponsiveContainer>
  );
}
