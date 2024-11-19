import React, { useState } from "react";

function Dashboard1() {
    return <h1>Dashboard 1</h1>;
}
function Dashboard2() {
    return <h1>Dashboard 2</h1>;
}
function Dashboard3() {
    return <h1>Dashboard 3</h1>;
}

export default function Dashboard() {
    const [activeDashboard, setActiveDashboard] = useState("Dashboard1");

    const dashboards = {
        Dashboard1: <Dashboard1 />,
        Dashboard2: <Dashboard2 />,
        Dashboard3: <Dashboard3 />,
    };

    return (
        <div style={{ marginBottom: 110, marginTop: 80 }}>
            <div className="buttons">
                <button onClick={() => setActiveDashboard("Dashboard1")}>
                    Mostrar Dashboard 1
                </button>
                <button onClick={() => setActiveDashboard("Dashboard2")}>
                    Mostrar Dashboard 2
                </button>
                <button onClick={() => setActiveDashboard("Dashboard3")}>
                    Mostrar Dashboard 3
                </button>
            </div>
            <div style={{ marginTop: 20 }}>
                {dashboards[activeDashboard]}
            </div>
        </div>
    );
}
