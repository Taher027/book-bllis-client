import axios from "axios";
const uploadImageToImageBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const apiKey = import.meta.env.VITE_ImageBBApiKey;
  const response = await axios.post(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  const data = response?.data?.data;
  return data?.display_url;
};
export default uploadImageToImageBB;
