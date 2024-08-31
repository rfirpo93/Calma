import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        populateWeatherData();
    }, []);

    const populateWeatherData = async () => {
        try {
            const response = await fetch('weatherforecast');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setForecasts(data);
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderForecastsTable = () => {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast => (
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h1 id="tableLabel">Weather Forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {loading ? (
                <p>
                    <em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
                </p>
            ) : (
                renderForecastsTable()
            )}
        </div>
    );
}

export default App;
