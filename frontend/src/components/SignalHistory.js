export default function SignalHistory({ history }) {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Prediction History</h3>
        <ul className="mt-2 list-disc ml-6">
          {history.map((entry, index) => (
            <li key={index}>
              {new Date(entry.date).toLocaleString()}: ${entry.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
