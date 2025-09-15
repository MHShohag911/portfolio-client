import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import useAxiosPublic from "../../hooks/axiosPublic";

const ImageUpload = ({onUpload, existingImage}) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(existingImage || "");
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_KEY;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axiosPublic.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_api}`,
        formData
      );
      const imageUrl = response.data.data.url;
      console.log(imageUrl)
      onUpload(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <Typography className="text-secondary" variant="h6">Upload Image</Typography>

      {/* Drag & Drop Area */}
      <div
        className="border-2 border-dashed border-gray-400 rounded-lg p-5 text-center cursor-pointer hover:border-primary relative"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {preview ? (
          <img src={preview} alt="preview" className="mx-auto max-h-40" />
        ) : (
          <p>Drag & Drop or Click to Select</p>
        )}
        {/* Hidden input */}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <Button
        size="sm"
        className="bg-secondary"
        onClick={handleUpload}
        disabled={!file || loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
};

export default ImageUpload;
