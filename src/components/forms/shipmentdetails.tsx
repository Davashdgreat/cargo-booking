import { useNavigate } from 'react-router-dom';

const ShipmentDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Step 1: Shipment Details</h2>
      <form className="space-y-4 w-full max-w-md">
        <input type="text" placeholder="Pickup Location" className="w-full p-2 border rounded-xl" />
        <input type="text" placeholder="Destination" className="w-full p-2 border rounded-xl" />
        <input type="number" placeholder="Weight (kg)" className="w-full p-2 border rounded-xl" />
        <button
          type="button"
          onClick={() => navigate('/pricing-options')}
          className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default ShipmentDetails;
