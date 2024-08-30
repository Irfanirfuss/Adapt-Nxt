import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

import "./index.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {
    // Data for the Line Chart
    const lineData = {
        labels: [
            "6/30/2024 - 7/6/2024",
            "7/7/2024 - 7/13/2024",
            "7/14/2024 - 7/20/2024",
            "7/21/2024 - 7/27/2024",
        ],
        datasets: [
            {
                label: "Orders",
                data: [1.6, 1.2, 0.8, 0.4],
                borderColor: "#ffb74d",
                backgroundColor: "#ffb74d",
                yAxisID: "y",
            },
            {
                label: "Sales",
                data: [4, 3, 2, 1],
                borderColor: "#64b5f6",
                backgroundColor: "#64b5f6",
                yAxisID: "y",
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Sales vs Orders",
            },
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
            },
            y1: {
                type: "linear",
                display: true,
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    // Data for the Pie Chart
    const pieData = {
        labels: ["WooCommerce Store", "Shopify Store"],
        datasets: [
            {
                data: [44.7, 55.3],
                backgroundColor: ["#4dd0e1", "#ff8a65"],
                hoverBackgroundColor: ["#4dd0e1", "#ff8a65"],
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Portion of Sales",
            },
        },
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <div
                className="sidebar"
                style={{
                    width: "15%",
                    backgroundColor: "#f3e5f5",
                    padding: "20px",
                    borderRadius: "10px",
                }}>
                <ul>
                    <li className="active">Dashboard</li>
                    <li>Inventory</li>
                    <li>Order</li>
                    <li>Returns</li>
                    <li>Customers</li>
                    <li>Shipping</li>
                    <li>Channel</li>
                    <li>Integrations</li>
                    <li>Calculators</li>
                    <li>Reports</li>
                    <li>Account</li>
                </ul>
            </div>

            {/* Main Content */}

            <div style={{ width: "85%", padding: "20px" }} className="main">
                <nav>
                    <h2>DashBoard</h2>
                </nav>
                <div className="dashboard-container">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                        {/* Line Chart */}
                        <div
                            style={{
                                width: "60%",
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "10px",
                                marginRight: "10px",
                            }}>
                            <Line data={lineData} options={lineOptions} />
                        </div>

                        {/* Pie Chart */}
                        <div
                            style={{
                                width: "35%",
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "10px",
                            }}>
                            <Pie data={pieData} options={pieOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
