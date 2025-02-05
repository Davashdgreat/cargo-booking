const ReviewConfirm = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Step 3: Review & Confirm</h2>
        <div className="w-full max-w-md space-y-4 border p-4 rounded-xl shadow-lg">
          <p>Review your shipment details here...</p>
          <button
            type="button"
            className="w-full bg-green-600 text-white p-2 rounded-xl hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    );
  };
  
  export default ReviewConfirm;
  