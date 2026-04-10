import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400, fill: '#0088FE' },
    { name: 'Group B', value: 300, fill: '#00C49F' },
    { name: 'Group C', value: 300, fill: '#FFBB28' },
    { name: 'Group D', value: 200, fill: '#FF8042' },
];

const Dashboard = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={80}
                        outerRadius={120}
                        cornerRadius={10}
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;