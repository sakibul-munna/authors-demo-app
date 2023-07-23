import { useState, useEffect } from "react";

const AuthorCard = ({ id, name, bio, onRemoveFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((item) => item.id === id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((item) => item.id !== id))
      );
      if (onRemoveFavorite) {
        onRemoveFavorite(id);
      }
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, { id, name, bio }])
      );
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-100 w-100">
      <div className="px-4 py-2 bg-gray-100" style={{ textAlign: "right" }}>
        <button
          onClick={toggleFavorite}
          className={`px-3 py-1 text-sm text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
            isFavorite ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600"
          }`}
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          <strong>Name: </strong>
          {name}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          <strong>Bio: </strong>
          {bio}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
