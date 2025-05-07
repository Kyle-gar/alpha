import { useState } from 'react';
import axios from 'axios';
import SignalDashboard from './components/SignalDashboard';
import SignalHistory from './components/SignalHistory';

export default function App() {
  const [symbol, setSymbol] = useState('AAPL');
  const [prediction, setPrediction] = useState(null);
  const [risk, setRisk] = useState(null);
  const [history, setHistory] = useState([]);

  const handlePredict = async () => {
    const res = await axios.get(`http://localhost:8000/predict/${symbol}`);
    const riskRes = await axios.get(`http://localhost:8000/risk/${symbol}`);
    setPrediction(res.data.predicted_price);
    setRisk(riskRes.data.VaR);
    setHistory((prev) => [...prev, { date: new Date().toISOString(), price: res.data.predicted_price }]);
  };

  return (
    <div className="p-8">
      <input className="border rounded p-2" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePredict}>
        Predict
      </button>
      {prediction && <SignalDashboard symbol={symbol} prediction={prediction} risk={risk} />}
      <SignalHistory history={history} />
    </div>
  );
}
