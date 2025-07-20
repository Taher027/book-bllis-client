import React from "react";
import { useFormStatus } from "react-dom";

const FormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
    >
      {pending ? "Submitting..." : "Submit Product"}
    </button>
  );
};

export default FormSubmitButton;
