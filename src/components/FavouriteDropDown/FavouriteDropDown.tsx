import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import FavouriteInner from "../FavouriteInner/FavouriteInner";
import {
  ArrowSectionWrapper,
  FavouriteDropDownWrapper,
} from "./FavouriteDropDownStyles";

const FavouriteDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  let arrayAsStrings = localStorage.getItem("favoriteMovies");
  let arrayAsArray = arrayAsStrings?.split(",");

  return (
    <FavouriteDropDownWrapper>
      <ArrowSectionWrapper>
        {isExpanded ? (
          <MdExpandLess
            className="expand-arrow"
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
      </ArrowSectionWrapper>
      <div
        className={
          isExpanded
            ? "w-full h-fit max-h-screen bg-transparent text-white mt-6 w-screen"
            : "hidden"
        }
      >
        <FavouriteInner data={arrayAsArray} />
      </div>
    </FavouriteDropDownWrapper>
  );
};

export default FavouriteDropDown;
