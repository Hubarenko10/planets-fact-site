import StarrySky from 'components/StarrySky';
import data from '../../data.json';
import { useEffect, useState } from 'react';
import ura from '../../images/planet-uranus.svg';
import internal from '../../images/planet-uranus-internal.svg';
import geo from '../../images/geology-uranus.svg';
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
} from './UranusStyled';
import { Unit } from 'pages/Earth/EarthStyled';

const Uranus = () => {
  const {
    name,
    overview,
    geology,
    structure,
    rotation,
    revolution,
    radius,
    temperature,
  } = data[6];
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
  const formatNumber = value => {
    const floatValue = parseFloat(value);
    const roundedValue = Math.round(floatValue * 100) / 100; // Округляем до двух знаков после запятой
    return roundedValue % 1 !== 0
      ? roundedValue.toFixed(2)
      : String(roundedValue);
  };

  useEffect(() => {
    const animateNumber = (initialValue, targetValue, elementId) => {
      const element = document.getElementById(elementId);
      let currentValue = parseFloat(initialValue.replace(/[^\d.-]/g, ''));
      const targetNumber = parseFloat(targetValue.replace(/[^\d.-]/g, ''));
      const increment = (targetNumber - currentValue) / 100;

      const updateNumber = () => {
        if (
          (increment > 0 && currentValue >= targetNumber) ||
          (increment < 0 && currentValue <= targetNumber)
        ) {
          clearInterval(interval);
          currentValue = targetNumber;
        } else {
          currentValue += increment;
          element.innerText = formatNumber(currentValue);
        }
      };

      const interval = setInterval(updateNumber, 5);

      return () => {
        clearInterval(interval);
      };
    };

    animateNumber('0', rotation, 'animatedRotation');
    animateNumber('0', revolution, 'animatedRevolution');
    animateNumber('0', radius, 'animatedRadius');
    animateNumber('0', temperature, 'animatedNumber');
  }, [rotation, revolution, radius, temperature]);

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
            <div>
              <Data id="animatedRotation">{rotation} Days</Data>
              <Unit>Days</Unit>
            </div>
          </CommonInfo>
          <CommonInfo>
            <CommonText>Revolution Time</CommonText>
            <div>
              <Data id="animatedRevolution"> {revolution} </Data>
              <Unit>Days</Unit>
            </div>
          </CommonInfo>
          <CommonInfo>
            <CommonText>Radius</CommonText>
            <div>
              <Data id="animatedRadius">{radius}</Data>
              <Unit>KM</Unit>
            </div>
          </CommonInfo>
          <CommonInfo>
            <CommonText>Average temp</CommonText>
            <div>
              <Data id="animatedNumber">{temperature}</Data>
              <Unit>°c</Unit>
            </div>
          </CommonInfo>
        </CommonInfoList>
      </Container>
    </>
  );
};
export default Uranus
