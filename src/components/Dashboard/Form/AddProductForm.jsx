import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const AddProductForm = () => {
  const [showImage, setShowImage] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setShowImage(URL.createObjectURL(file));
    }
  };

  function formAction(formData) {
    const data = Object.fromEntries(formData.entries());
    console.log("Form data submitted:", data);

    // Example: handle image separately
    const image = formData.get("image");
  }
  return (
    <div className="flex flex-col p-5">
      <div className="w-full p-4">
        <h2 className="text-lg font-semibold card-text">Add a new Product</h2>
      </div>

      <form
        action={formAction}
        className=" space-y-4 transition-all duration-300"
      >
        <div className="w-full bg-white px-4 py-6 flex flex-col md:flex-row gap-5">
          <div className="w-full  md:w-1/2 px-8 py-6  space-y-5">
            <div>
              <label
                htmlFor="title"
                className="mb-1 text-sm font-light card-text"
              >
                Title<span className="text-primary font-bold">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
              />
            </div>
            <div className="flex gap-5 ">
              <div className="w-1/2">
                <label
                  htmlFor="category"
                  className="mb-1 text-sm font-light card-text"
                >
                  Category<span className="text-primary font-bold">*</span>
                </label>
                <input
                  type="text"
                  name="Category"
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="author"
                  className="mb-1 text-sm font-light card-text"
                >
                  Author<span className="text-primary font-bold">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="publication"
                className="mb-1 text-sm font-light card-text"
              >
                Publication<span className="text-primary font-bold">*</span>
              </label>
              <input
                type="text"
                name="Publication"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
              />
            </div>

            <div>
              <label
                htmlFor="short-description"
                className=" mb-1 text-sm font-light card-text"
              >
                Short Description
                <span className="text-primary font-bold">*</span>
              </label>
              <textarea
                name="shortDescription"
                required
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className=" mb-1 text-sm font-light card-text"
              >
                Description
                <span className="text-primary font-bold">*</span>
              </label>
              <textarea
                name="Description"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
              />
            </div>
          </div>
          <div className="w-full  md:w-1/2 px-8 py-6  space-y-5">
            <div className=" py-6 flex items-center gap-5 ">
              <div className="relative">
                <label
                  htmlFor="price"
                  className="mb-1 text-sm font-light card-text"
                >
                  Price<span className="text-primary font-bold">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  className="w-full relative h-10 px-8 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
                />
                <button className="absolute left-3 h-10">
                  <BsCurrencyDollar size={14} />
                </button>
              </div>
              <div className="relative">
                <label
                  htmlFor="sell-price"
                  className="mb-1 text-sm font-light card-text"
                >
                  Sell Price<span className="text-primary font-bold">*</span>
                </label>
                <input
                  type="number"
                  name="sellPrice"
                  required
                  className="w-full h-10 px-8 py-2 border border-gray-300 focus:rounded-sm focus:border-2 focus:border-gray-600 focus:outline-none focus:ring-0 transition-all duration-100"
                />
                <button className="absolute left-3 h-10">
                  <BsCurrencyDollar size={14} />
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                <div className=" px-8 py-8 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label onChange={handleImageChange}>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                      <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer py-3 px-5 hover:bg-rose-500">
                        Upload Book Image
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* iamge show  */}
            <div className="w-1/2 h-auto mx-auto border-2 border-dotted p-5 content-center text-center">
              {showImage ? (
                <img
                  src={showImage}
                  alt=" image upload"
                  className="w-full h-full object-contain "
                />
              ) : (
                <span className="text-lg font-medium card text">
                  Upload Image
                </span>
              )}
            </div>
          </div>
        </div>
        <div className=" w-max px-12">
          <SubmitButton></SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit Product"}
    </button>
  );
}
