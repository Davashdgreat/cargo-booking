import { FormDataType } from "../../types";

interface StepThreeProps {
  formData: FormDataType;
  prevStep: () => void;
}

const StepThree = ({ formData, prevStep }: StepThreeProps) => {
  const calculatePrice = () => {
    let basePrice = 100;
    basePrice += parseFloat(formData.weight) * 5;
    if (formData.cargoType === "fragile") basePrice += 20;
    if (formData.cargoType === "heavy") basePrice += 50;

    return basePrice;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Confirm & Book</h2>
      <p>Pickup: {formData.pickup}</p>
      <p>Delivery: {formData.delivery}</p>
      <p>Date: {formData.date}</p>
      <p>Weight: {formData.weight} kg</p>
      <p>Type: {formData.cargoType}</p>
      <p className="text-lg font-bold mt-2">Estimated Price: ${calculatePrice()}</p>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300">
          Back
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Book Now</button>
      </div>
    </div>
  );
};

export default StepThree;
