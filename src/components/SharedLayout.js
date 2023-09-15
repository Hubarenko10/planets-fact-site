import { Header, StyledLink, Title } from "./SharedLayoutStyles";
import {  Outlet } from "react-router-dom";







export const SharedLayout = () => {
    return(
        <>
         <Header>
         <Title to="/earth" end>
          The planets
        </Title>
      <nav>
        <StyledLink to="/mercury">Mercury</StyledLink>
        <StyledLink to="/venus">Venus</StyledLink>
        <StyledLink to="/earth">Earth</StyledLink>
        <StyledLink to="/mars">Mars</StyledLink>
        <StyledLink to="/jupiter">Jupiter</StyledLink>
        <StyledLink to="/saturn">Saturn</StyledLink>
        <StyledLink to="/uranus">Uranus</StyledLink>
        <StyledLink to="/neptune">Neptune</StyledLink>
      </nav>
      </Header>
        <Outlet/>
        </>
    )

}