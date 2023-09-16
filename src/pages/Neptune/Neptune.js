import StarrySky from 'components/StarrySky';
import data from '../../data.json';
import { useState } from 'react';
import ura from '../../images/planet-neptune.svg';
import internal from '../../images/planet-neptune-internal.svg';
import geo from '../../images/geology-neptune.svg';
import {
  Btn,
  CommonInfo,
  CommonInfoList,
  CommonText,
  Container,
  Data,
  Image,
  Info,
  InfoBox,
  InfoIcon,
  InfoLink,
  InfoLinkText,
  List,
  Number,
  Title,
} from './NeptuneStyled';

const Neptune = () => {
  const {
    name,
    overview,
    geology,
    structure,
    rotation,
    revolution,
    radius,
    temperature,
  } = data[7];
  const [currentImage, setCurrentImage] = useState(ura);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [currentText, setCurrentText] = useState(overview.content);
  const [currentLink, setCurrentLink] = useState(overview.source);

  const buttonData = [
    {
      label: 'Overview',
      image: ura,
      link: overview.source,
      text: overview.content,
    },
    {
      label: 'Internal Structure',
      image: internal,
      link: structure.source,
      text: structure.content,
    },
    {
      label: 'Surface Geology',
      image: geo,
      link: geology.source,
      text: geology.content,
    },
  ];
  const handleButtonClick = (index, image, link, text) => {
    setCurrentImage(image);
    setActiveButtonIndex(index);
    setCurrentLink(link);
    setCurrentText(text);
  };

  console.log();
  return (
    <>
      <StarrySky />
      <Container>
        <InfoBox>
          <Image src={currentImage} alt="Planet" />
          <div>
            <Title>{name}</Title>
            <Info>{currentText}</Info>
            <InfoLinkText>
              Source :{' '}
              <InfoLink href={currentLink}>
                {' '}
                Wikipedia
                <InfoIcon />
              </InfoLink>
            </InfoLinkText>
            <List>
              {buttonData.map((button, index) => (
                <li key={index}>
                  <Btn
                    isActive={activeButtonIndex === index}
                    onClick={() =>
                      handleButtonClick(
                        index,
                        button.image,
                        button.link,
                        button.text
                      )
                    }
                  >
                    <Number>{(index + 1).toString().padStart(2, '0')}</Number>
                    {button.label}
                  </Btn>
                </li>
              ))}
            </List>
          </div>
        </InfoBox>
        <CommonInfoList>
          <CommonInfo>
            <CommonText>Rotation Time</CommonText>
            <Data>{rotation}</Data>
          </CommonInfo>
          <CommonInfo>
            <CommonText>Revolution Time</CommonText>
            <Data>{revolution}</Data>
          </CommonInfo>
          <CommonInfo>
            <CommonText>Radius</CommonText>
            <Data>{radius}</Data>
          </CommonInfo>
          <CommonInfo>
            <CommonText>Average temp</CommonText>
            <Data>{temperature}</Data>
          </CommonInfo>
        </CommonInfoList>
      </Container>
    </>
  );
};
export default Neptune
