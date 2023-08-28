import MovieCard, { IMovieCardProps } from "../MovieCard/MovieCard";
import { useState, useEffect } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import axios from "axios";
import { API_KEY } from "../../services/api";

const FavouriteDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  var idArray: String[] | undefined = localStorage?.getItem("favorites")?.split(",");
  const [mainArr, setMainArr] = useState<IMovieCardProps[]>([]);

  const getMovieById = () => {
    idArray?.map(async (id) => {
     await axios({
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        params: {
          api_key: API_KEY,
        },
      }).then((response) => {
        setMainArr(response.data.results);
        console.log(mainArr);
      });
    });
  };

  useEffect(() => {
    getMovieById();
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center grow w-full">
        {isExpanded ? (
          <MdExpandLess
            className="h-16 w-16 text-white cursor-pointer self-center"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          />
        ) : (
          <MdExpandMore
            className="h-16 w-16 text-white cursor-pointer self-center"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          />
        )}
      </div>
      <div className={isExpanded ? "w-full min-h-screen max-h-screen bg-transparent text-white mt-6 flex max-w-screen flex-wrap" : "hidden"}>
        {mainArr?.map((movie: any) => {
          console.log("I'm here!");
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              originalTitle={movie.originalTitle}
              overview={movie.overview}
              posterPath={movie.posterPath}
              releaseDate={movie.releaseDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteDropDown;
