import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../animations/loader.json";
import AuthorCard from "../components/AuthorCard";
import PaginationButtons from "../components/PaginationButton.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthors } from "../features/authors/authorSlice.js";

const AuthorScreen = () => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors.authors);
  const pageCount = useSelector((state) => state.authors.pageCount);
  const isLoading = useSelector((state) => state.authors.isLoading);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAuthors(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(fetchAuthors(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Authors</h1>
      {isLoading ? (
        <Lottie animationData={loaderAnimation} />
      ) : (
        <>
          <div className="grid grid-cols-3 gap-10">
            {authors.map((author) => {
              return (
                <AuthorCard
                  key={author._id}
                  id={author._id}
                  name={author.name}
                  bio={author.bio}
                />
              );
            })}
          </div>
          {pageCount > 0 && (
            <div className="mb-10 pb-10">
              <PaginationButtons
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={pageCount}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AuthorScreen;
