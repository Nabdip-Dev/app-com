import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { InstallAppContext } from '../../contact/InstallAppCoantext';
import AppUse from '../../hooks/AppUse';

const Dashboard = () => {
    const { installApp = [] } = useContext(InstallAppContext)
    const{apps, loading}= AppUse();
    const unstallApps =apps.length-installApp.length;
    const data = [
        { name: 'Installed', value: installApp.length, fill: '#0088FE' },
        { name: 'Unstalled', value: unstallApps, fill: '#00C49F' },

    ];


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
                    <Legend />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;