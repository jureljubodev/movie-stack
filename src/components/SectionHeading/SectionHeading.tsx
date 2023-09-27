import React from "react";
import { SectionHeadingCSS } from "./SectionHeadingStyles";

interface ISectionHeadingProps {
  text: string;
  icon: string;
}

const SectionHeading: React.FC<ISectionHeadingProps> = (props): JSX.Element => {
  return (
    <SectionHeadingCSS>
      {props.text} {props.icon}
    </SectionHeadingCSS>
  );
};

export default SectionHeading;
