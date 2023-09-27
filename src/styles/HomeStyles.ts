import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
  background: #060d17;
`;
export const HomeHeading = styled.h1`
  width: 60%;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #c69b00;

  @media (min-width: 640px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`;
export const HomeButton = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 8rem;
  padding-right: 8rem;
  margin-top: 2rem;
  border-radius: 0.375rem;
  border-width: 2px;
  border-color: transparent;
  color: #ffffff;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background: #10161d;

  &:hover {
    border-width: 2px;
    background-color: transparent;
    color: #c69b00;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border-color: #c69b00;
  }
`;
