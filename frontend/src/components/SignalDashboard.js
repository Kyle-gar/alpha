export default function SignalDashboard({ symbol, prediction, risk }) {
    return (
      <div className="mt-4 border p-4 rounded">
        <h2 className="text-xl">{symbol} Prediction:</h2>
        <p className="text-2xl">${prediction}</p>
        <p className="mt-2">Value at Risk (VaR): {risk}</p>
      </div>
    );
  }
