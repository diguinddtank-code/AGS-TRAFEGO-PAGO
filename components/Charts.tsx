import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { COLORS } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded text-sm">
        <p className="font-semibold text-gray-700 mb-1">{label}</p>
        <p className="text-[#1a73e8]">
          Conversas: <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

interface SimpleTrendChartProps {
  data: any[];
}

export const SimpleTrendChart: React.FC<SimpleTrendChartProps> = ({ data }) => {
  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.1} />
              <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke={COLORS.muted} 
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <YAxis 
            stroke={COLORS.muted} 
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#dadce0', strokeWidth: 1 }} />
          <Area
            type="monotone"
            dataKey="conversations"
            stroke={COLORS.primary}
            fillOpacity={1}
            fill="url(#colorConv)"
            strokeWidth={2}
            activeDot={{ r: 4, strokeWidth: 0, fill: COLORS.primary }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};