import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataType, formSchema } from "../../types";

interface StepTwoProps {
  formData: FormDataType;
  setFormData: (data: FormDataType) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepTwo = ({ formData, setFormData, nextStep, prevStep }: StepTwoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: FormDataType) => {
    setFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-semibold mb-4">Cargo Details</h2>

      <input
        {...register("weight")}
        placeholder="Weight (kg)"
        className="w-full border p-2 rounded mb-2"
      />
      {errors.weight && <p className="text-red-500 text-sm">{errors.weight.message}</p>}

      <input
        {...register("dimensions")}
        placeholder="Dimensions (LxWxH)"
        className="w-full border p-2 rounded mb-2"
      />
      {errors.dimensions && <p className="text-red-500 text-sm">{errors.dimensions.message}</p>}

      <select {...register("cargoType")} className="w-full border p-2 rounded mb-4">
        <option value="">Select Cargo Type</option>
        <option value="fragile">Fragile</option>
        <option value="heavy">Heavy</option>
        <option value="general">General</option>
      </select>
      {errors.cargoType && <p className="text-red-500 text-sm">{errors.cargoType.message}</p>}

      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300">
          Back
        </button>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
