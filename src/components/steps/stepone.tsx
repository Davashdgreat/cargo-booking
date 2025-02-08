import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataType, formSchema } from "../../types";

interface StepOneProps {
  formData: FormDataType;
  setFormData: (data: FormDataType) => void;
  nextStep: () => void;
}

const StepOne = ({ formData, setFormData, nextStep }: StepOneProps) => {
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
      <h2 className="text-xl font-semibold mb-4">Shipment Details</h2>

      <input
        {...register("pickup")}
        placeholder="Pickup Location"
        className="w-full border p-2 rounded mb-2"
      />
      {errors.pickup && <p className="text-red-500 text-sm">{errors.pickup.message}</p>}

      <input
        {...register("delivery")}
        placeholder="Delivery Location"
        className="w-full border p-2 rounded mb-2"
      />
      {errors.delivery && <p className="text-red-500 text-sm">{errors.delivery.message}</p>}

      <input
        type="date"
        {...register("date")}
        className="w-full border p-2 rounded mb-4"
      />
      {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

      <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
            >
            Next
      </button>
    </form>
  );
};

export default StepOne;
