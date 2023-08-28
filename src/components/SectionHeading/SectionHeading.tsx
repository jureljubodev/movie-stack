import React from "react";

interface ISectionHeadingProps {
  text: string;
  icon: string;
}

const SectionHeading: React.FC<ISectionHeadingProps> = (props): JSX.Element => {
  return (
    <h1 className="ml-16 text-white text-4xl mt-8 font-bold">
      {props.text} {props.icon}
    </h1>
  );
};

export default SectionHeading;
