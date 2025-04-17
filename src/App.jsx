import { useEffect, useState } from "react";
import { fetchImages } from "./api/imageApi";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };

    getImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-6 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12 tracking-tight drop-shadow-2xl">
          📷 Explore Beautiful Moments
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {images.map((img) => (
            <ImageCard key={img.id} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
