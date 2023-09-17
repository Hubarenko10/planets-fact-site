import styled from "styled-components";
import { HiExternalLink } from 'react-icons/hi';


export const Container = styled.div`
  margin-top: 70px;
`;

export const Image = styled.img`
  display: block;
  width: 570px;
  height: 570px;
  margin-right:111px; 
  transform: translateY(100%); 
  animation: bounceIn 0.8s ease forwards; 

 
  @keyframes bounceIn {
    0% {
      transform: translateY(100%) scale(0.2); 
    }
    80% {
      transform: translateY(-10%) scale(1.2);
    }
    100% {
      transform: translateY(0) scale(1); 
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 90px;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: 'Antonio', sans-serif;
  text-transform: uppercase;
  letter-spacing: -1.05px;
  font-size: 80px;
  padding-right: 360px;
  margin-bottom: 25px;
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Info = styled.p`
  width: 350px;
  color: #fff;
  font-size: 14px;
  font-family: 'Antonio', sans-serif;
  margin-bottom: 25px;
  line-height: 25px;
`;

export const InfoLinkText = styled.p`
  color: #979797;
  font-size: 14px;
  font-family: 'Antonio', sans-serif;
  display: flex;
  margin-bottom: 40px;
`;
export const InfoLink = styled.a`
  color: #979797;
  font-size: 14px;
  font-family: 'Antonio', sans-serif;
  text-decoration: underline;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const InfoIcon = styled(HiExternalLink)`
  fill: #979797;
  margin-left: 8px;
`;
export const List = styled.ul`
  li:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Btn = styled.button`
  width: 350px;
  height: 50px;
  background-color: transparent;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  border: ${(props) => (props.isActive ? 'none' : "1px solid #979797")};
  background-color: ${(props) => (props.isActive ? '#D14C32' : 'transparent;')};
  cursor:pointer;
  &:hover{
    background-color: rgba(108, 122, 137, 0.2);
  }
`;
export const Number = styled.span`
  color: #979797;
  font-size: 15px;
  padding-left: 28px;
  margin-right: 28px;
`;
export const CommonInfoList = styled.ul`
  display: flex;
  justify-content: center;
  li:not(:last-child) {
    margin-right: 30px;
  }
`;

export const CommonInfo = styled.li`
  width: 300px;
  height: 128px;
  border: 1px solid #979797;
  display: block;
`;

export const CommonText = styled.p`
  color: #979797;
  padding-top: 20px;
  padding-left: 23px;
  font-size: 11px;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const Data = styled.span`
  color: #fff;
  font-size: 40px;
  padding-left: 23px;
  letter-spacing: -1.5px;
`;
