import styled from "styled-components";

export const FavouriteDropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArrowSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const FavouriteInnerWrapper = styled.div`
display: flex;
overflow-x: auto;
padding-top: 1rem;
padding-bottom: 1rem;
margin-left: 2rem;
flex-wrap: nowrap;
gap: 1.25rem;
color: #ffffff;
scroll-behavior: smooth;
scroll-snap-type: x var(--tw-scroll-snap-strictness);
--tw-scroll-snap-strictness: mandatory;

`;

export const HiddenContainer = styled.div`
  display: hidden;
`;

export const ShownContainer = styled.div`
  margin-top: 1.5rem;
  height: fit-content;
  max-height: 100vh;
  color: #ffffff;
  background-color: transparent;
`;
