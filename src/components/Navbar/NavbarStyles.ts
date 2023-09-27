import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  padding-left: 4rem;
  padding-right: 4rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #060d17;

  @media (min-width: 988px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
export const Logo = styled.img`
  padding: 0.5rem;
  cursor: pointer;
`;
export const NavbarUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const NavbarLi = styled.li`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-left: 0;
  margin-right: 0;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  color: #7b7e82;

  @media (min-width: 988px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  :hover {
    color: #ffffff;
  }
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.25rem;
  background: #10161d;
  width: 100%;

  @media (max-width: 1036px) {
    max-width: 90vw;
    width: 90vw;
  }
  @media (max-width: 390px) {
    flex-direction: column;
  }

`;
export const SearchInput = styled.input`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: #10161d;
  color: #7b7e82;
  flex: 1;
  @media (max-width: 390px) {
    text-align: center;
    margin: .7rem 0;
  }
`;
export const SearchButton = styled.button`
  padding-left: 4rem;
  padding-right: 4rem;
  color: #ffffff;
  background: #c69b00;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  @media (max-width: 988px) {
    padding: 0rem 1.5rem;
  }
  &:hover,
  &:focus {
    color: #c69b00;
    background: transparent;
    transition: all 0.3s ease;
  }
`;
