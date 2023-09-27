import styled from "styled-components";

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
