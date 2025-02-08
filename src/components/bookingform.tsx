import { useState } from "react";
import StepOne from "./steps/stepone";
import StepTwo from "./steps/steptwo";
import StepThree from "./steps/stepthree";
import { FormDataType } from "../types";
import { AnimatePresence, motion } from "framer-motion";

const BookingForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    pickup: "",
    delivery: "",
    date: "",
    weight: "",
    dimensions: "",
    cargoType: "",
    price: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const progressWidth = `${(step / 3) * 100}%`;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-300 rounded-full mb-4">
        <motion.div
          className="absolute h-2 bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: progressWidth }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Animated Step Content */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <StepThree formData={formData} prevStep={prevStep} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
