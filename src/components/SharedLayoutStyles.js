import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 22px 32px;
  margin-bottom: 27px;
  border-bottom: 1px solid #979797;
  justify-content:space-between;
  > nav {
    display: flex;
    gap:33px;
  }
`;


export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: "Spartan", sans-serif;
  font-size: 15px; 
  letter-spacing:1px;
  cursor: pointer;

  &.active {
    color: #87CEFA;
    
  }
  &:hover{
    color: #87CEFA;
  }
`;

export const Title = styled(NavLink)`
  color: #fff;
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
  letter-spacing:-1.05px;
  font-size: 28px;
`;