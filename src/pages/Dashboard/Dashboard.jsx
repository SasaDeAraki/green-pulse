import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
    const [totalSteps, setTotalSteps] = useState(0);
    const [totalPeople, setTotalPeople] = useState(0);
    const [totalEnergy, setTotalEnergy] = useState(0);
    const [energyData, setEnergyData] = useState([]);
    const [energyPerPerson, setEnergyPerPerson] = useState(0);
    const [carbonAvoided, setCarbonAvoided] = useState(0);

    const COLORS = ["#00FF88", "#00CC66", "#009944", "#007733", "#004422"];

    const stations = [
        "Paulista", "Consolação", "Brás", "Liberdade", "Sé", "Trianon-Masp", "Paraíso", "República", "Bela Vista", "Anhangabaú",
        "Vila Madalena", "Barra Funda", "Faria Lima", "Moema", "Butantã"
    ];

    const initialEnergyData = Array.from({ length: 10 }, (_, index) => ({
        time: `${index}:00`,
        energy: (Math.random() * 10).toFixed(2),
        steps: Math.floor(Math.random() * 100),
        people: index + 1,
        station: stations[index % stations.length],
    }));

    useEffect(() => {
        setEnergyData(initialEnergyData);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const newSteps = Math.floor(Math.random() * 50) + 10;
            const newEnergy = newSteps * 0.05;

            setTotalSteps((prev) => prev + newSteps);
            setTotalPeople((prev) => prev + 1);
            setTotalEnergy((prev) => prev + newEnergy);

            const stationName = stations[totalPeople % stations.length];

            setEnergyData((prevData) => [
                ...prevData.slice(-9),
                {
                    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                    energy: parseFloat(newEnergy.toFixed(2)),
                    steps: newSteps,
                    people: totalPeople + 1,
                    station: stationName,
                },
            ]);

            const newCarbonAvoided = newEnergy * 0.45;
            setCarbonAvoided((prev) => prev + newCarbonAvoided);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalPeople, totalEnergy]);

    useEffect(() => {
        setEnergyPerPerson(((totalEnergy) / (totalPeople || 1)).toFixed(2));
    }, [totalEnergy, totalPeople]);

    return (
        <div className="dashboard">
            <div className="dashboard-card">
                <h2 className="dashboard-title">Dashboard Energético</h2>
                <div className="dashboard-container">
                    <div className="info-cards">
                        <div className="info-card">
                            <h3>Pessoas</h3>
                            <p>{totalPeople}</p>
                        </div>
                        <div className="info-card">
                            <h3>Passos</h3>
                            <p>{totalSteps}</p>
                        </div>
                        <div className="info-card">
                            <h3>Energia Total (kWh)</h3>
                            <p>{totalEnergy.toFixed(2)}</p>
                        </div>
                        <div className="info-card">
                            <h3>Energia por Pessoa (kWh)</h3>
                            <p>{energyPerPerson}</p>
                        </div>
                        <div className="info-card">
                            <h3>Estação</h3>
                            <p>{stations[totalPeople % stations.length]}</p>
                        </div>
                    </div>

                    <div className="graph-cards">
                        <div className="graph-card">
                            <h4>Energia ao Longo do Tempo</h4>
                            <div className="chart-container">
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={energyData}
                                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid stroke="#333" />
                                    <XAxis dataKey="time" stroke="#00FF88" />
                                    <YAxis stroke="#00FF88" />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="energy"
                                        stroke="#00FF88"
                                        dot={{ r: 4 }}
                                        name="Energia (kWh)"
                                    />
                                </LineChart>
                            </div>
                        </div>

                        <div className="graph-card">
                            <h4>Distribuição de Energia por Hora</h4>
                            <div className="chart-container">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={energyData.slice(-5)}
                                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid stroke="#333" />
                                    <XAxis dataKey="time" stroke="#00FF88" />
                                    <YAxis stroke="#00FF88" />
                                    <Tooltip />
                                    <Bar dataKey="energy" fill="#00FF88" barSize={30} />
                                </BarChart>
                            </div>
                        </div>

                        <div className="graph-card pie-graph-card">
                            <h4>Distribuição de Energia</h4>
                            <div className="pie-chart-container">
                                <PieChart width={300} height={300}>
                                    <Pie
                                        data={energyData.slice(-5)}
                                        dataKey="energy"
                                        nameKey="time"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={120}
                                        fill="#8884d8"
                                        label
                                    >
                                        {energyData.slice(-5).map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
