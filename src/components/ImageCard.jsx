const ImageCard = ({ image }) => {
    return (
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <img
          className="w-full h-60 object-cover"
          src={image.urls.small}
          alt={image.alt_description}
        />
        <div className="px-5 py-4 bg-zinc-200 h-[100px] flex flex-col ">
           <h2 className="font-semibold text-xl text-gray-800">{image.user.name}</h2>
           <p className="text-gray-500 text-sm">{image.alt_description || "Beautiful image"}</p>
       </div>

      </div>
    );
  };
  
  export default ImageCard;
  