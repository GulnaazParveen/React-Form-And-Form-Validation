import React, { useState } from 'react';
import styled from 'styled-components';
import Pic1 from '../../../images/pic1.png';
import Registration from './Registration';
import UserLogin from './UserLogin';

const Container = styled.div`
  display: flex;
  height: 90vh;
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url(${Pic1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: ${(props) => (props.hideOnMobile ? 'none' : 'block')};

  @media (min-width: 600px) {
    display: block;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
`;

const TabHeader = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`;

const IconContainer = styled.div`
  color: purple;
  font-size: 100px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" style={{ display: value === index ? 'block' : 'none' }}>
      {children}
    </div>
  );
};

const LoginRegistration = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Container>
      <ImageSection hideOnMobile={window.innerWidth < 600} />
      <FormSection>
        <Card>
          <TabHeader>
            <TabButton onClick={() => handleTabChange(0)} isActive={tabIndex === 0}>
              Login
            </TabButton>
            <TabButton onClick={() => handleTabChange(1)} isActive={tabIndex === 1}>
              Registration
            </TabButton>
          </TabHeader>
          <TabPanel value={tabIndex} index={0}>
            <UserLogin />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Registration />
          </TabPanel>
        </Card>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <IconContainer>👜</IconContainer>
          <Title>Geek-Shop</Title>
        </div>
      </FormSection>
    </Container>
  );
};

export default LoginRegistration;
