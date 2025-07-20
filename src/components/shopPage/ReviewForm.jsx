import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { TfiWrite } from "react-icons/tfi";
async function handleFormAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("Form Data:", { name, email, message });

  return { success: true };
}

const ReviewForm = () => {
  const [toogleForm, setToggleForm] = useState(false);
  const handleToggleForm = () => {
    setToggleForm((prev) => !prev);
  };
  const [formState, formAction] = useFormState(handleFormAction, {
    success: false,
  });
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col mt-10">
      <div
        onClick={handleToggleForm}
        className="flex gap-1 group items-center mb-5"
      >
        <h2 className="text-base order-1  font-semibold  group-hover:cursor-pointer group-hover:underline transition-all duration-300">
          Write a review
        </h2>
        <TfiWrite
          className="group-hover:cursor-pointer text-primary"
          size={16}
        />
      </div>
      {toogleForm && (
        <form
          action={formAction}
          className="p-6 space-y-4 transition-all duration-300"
        >
          <div>
            <label
              htmlFor="message"
              className=" mb-1 text-sm font-light text-gray-500"
            >
              Message<span className="text-primary font-bold">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="mb-1 text-sm font-light text-gray-500"
            >
              Name<span className="text-primary font-bold">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 text-sm font-light text-gray-500"
            >
              Email<span className="text-primary font-bold">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`button-bg rounded-md text-black/80 hover:bg-red-600 hover:text-white transition duration-300 px-5 py-2 hidden md:block cursor-pointer ${
              pending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {pending ? "Submiting..." : "Submit"}
          </button>

          {formState.success && (
            <p className="text-orange-300 font-normal text-center">
              Thank you for your review! It has been submitted successfully.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
