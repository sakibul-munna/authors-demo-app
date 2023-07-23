import React, { useState, useEffect, useMemo } from "react";
import AuthorCard from "../components/AuthorCard.js";
import PaginationButtons from "../components/PaginationButton";

const FavoriteAuthorScreen = () => {
  const [authorsToDisplay, setAuthorsToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const favoriteAuthors = useMemo(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }, []);

  const pageCount = Math.ceil(favoriteAuthors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setAuthorsToDisplay(favoriteAuthors.slice(startIndex, endIndex));
  }, [favoriteAuthors, startIndex, endIndex]);

  const handleRemoveFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((item) => item.id !== id))
    );
    setAuthorsToDisplay((prevAuthors) =>
      prevAuthors.filter((author) => author.id !== id)
    );
  };

  return (
    <div className="p-4 h-screen flex flex-col items-center flex-1">
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Favorite Authors</h1>
        {authorsToDisplay.length === 0 ? (
          <p className="text-red-500 font-bold">No Favorite Items</p>
        ) : null}
      </div>
      {authorsToDisplay.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-10">
            {authorsToDisplay.map((author) => {
              return (
                <AuthorCard
                  key={author.id}
                  id={author.id}
                  name={author.name}
                  bio={author.bio}
                  onRemoveFavorite={handleRemoveFavorite}
                />
              );
            })}
          </div>
          <div className="">
            <PaginationButtons
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={pageCount}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FavoriteAuthorScreen;
