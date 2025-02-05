import { useNavigate } from 'react-router-dom';

const PricingOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Step 2: Pricing & Options</h2>
      <form className="space-y-4 w-full max-w-md">
        <select className="w-full p-2 border rounded-xl">
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
        </select>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Add Insurance</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Fragile Handling</span>
        </label>
        <button
          type="button"
          onClick={() => navigate('/review-confirm')}
          className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PricingOptions;
