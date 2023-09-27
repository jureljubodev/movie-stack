import MovieCard from "../MovieCard/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { FavouriteInnerWrapper } from "./FavouriteInnerStyles";
import { requestsList, basicUrlSnips } from "../../utils/env-exporter";

interface IFavouriteInnerProps {
  data: any;
}

interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const FavouriteInner: React.FC<IFavouriteInnerProps> = (props): JSX.Element => {
  const [arrayOfDataObj, setArrayOfDataObj] = useState<IMovie[]>([]);
  const getMovieById = async () => {
    await props.data?.map(async (id: string) => {
      await axios({
        url: `${requestsList.fetchByMovieId}${id}${basicUrlSnips.languageSnip}`,
        params: {
          api_key: basicUrlSnips.apiKey,
        },
      }).then((response) => {
        console.log(response.data);
        if (
          arrayOfDataObj.some((element) => {
            if (element.id === response.data.id) {
              return true;
            }
          })
        ) {
          console.log("Already in array.");
        } else {
          arrayOfDataObj.push(response.data);
          console.log(arrayOfDataObj);
        }
      });
    });
    // setTrueState(true);
  };

  const synchFunc = () => {
    getMovieById();
  };

  useEffect(() => {
    if (arrayOfDataObj.length !== props.data.length) {
      synchFunc();
    }
  }, []);

  // useEffect(() => {
  //   if (arrayOfDataObj.length > 0) {
  //     setTrueState(true);
  //   } else {
  //     setTrueState(false);
  //   }
  // }, [arrayOfDataObj.length]);

  return (
    <FavouriteInnerWrapper>
      {arrayOfDataObj ? (
        arrayOfDataObj?.map((movie: any) => {
          return (
            <MovieCard
              key={movie.id * Math.random()}
              id={movie.id}
              originalTitle={movie.title}
              overview={movie.overview}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
            />
          );
        })
      ) : (
        <h2>No favorites yet...</h2>
      )}
    </FavouriteInnerWrapper>
  );
};

export default FavouriteInner;
