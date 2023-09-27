import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  height: 100vh;
  color: #ffffff;
  background: #060d17;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const MovieDetailsImg = styled.img`
  align-self: center;
  width: 33.333333%;
  height: auto;
  border-radius: 20px;

  @media (max-width: 630px) {
    margin-top: 2rem;
  }
`;

export const MovieDetailsInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;
export const MovieDetailsHeading = styled.h1`
  align-self: center;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #ffffff;

  @media (min-width: 640px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`;
export const MovieDetailsTextWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  align-self: center;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 66.666667%;
  }
`;
export const MovieDetailsParagraph = styled.p`
  align-self: center;

  @media (max-width: 340px) {
    font-size: .85rem;
    max-width: 80%;
  }
`;
export const DefaultDiv = styled.div``;
export const MovieDetailsButton = styled.button`
  padding-left: 8rem;
  padding-right: 8rem;
  margin-top: 2rem;
  border-radius: 0.375rem;
  border-width: 2px;
  border-color: transparent;
  min-width: 100%;
  max-width: 400px;
  text-align: center;
  color: #ffffff;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background: #10161d;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &:hover {
    border-width: 2px;
    background-color: transparent;
    color: #c69b00;
    border-color: #c69b00;
  }
`;
