import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import FavouriteInner from "../FavouriteInner/FavouriteInner";
import {
  ArrowSectionWrapper,
  FavouriteDropDownWrapper,
  HiddenContainer,
  ShownContainer,
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
            className="expand-arrow"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          />
        )}
      </ArrowSectionWrapper>
      <div className={isExpanded ? "shown-container" : "hidden-container"}>
        <FavouriteInner data={arrayAsArray} />
      </div>
    </FavouriteDropDownWrapper>
  );
};

export default FavouriteDropDown;
