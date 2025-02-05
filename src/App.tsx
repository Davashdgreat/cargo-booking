import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => navigate('/shipment-details')}
        className="text-2xl font-bold bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"
      >
        Start Booking 🚚
      </button>
    </div>
  );
}

export default App;
