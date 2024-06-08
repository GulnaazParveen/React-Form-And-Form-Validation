import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChangePassword from './auth/ChangePassword';

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  flex: 1;
  background-color: gray;
  padding: 40px;
  color: white;
`;

const Content = styled.div`
  flex: 2;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
`;

const LogoutButton = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #ff9800;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #e68900;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/login');
  }

  return (
    <Container>
      <Sidebar>
        <Title>Dashboard</Title>
        <InfoText>Email: sonam@gmail.com</InfoText>
        <InfoText>Name: Sonam</InfoText>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Sidebar>
      <Content>
        <ChangePassword />
      </Content>
    </Container>
  );
};

export default Dashboard;
