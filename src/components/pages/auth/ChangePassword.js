
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto 0 4rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 8px 0;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  margin: 24px 0 16px;
  padding: 12px 24px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;

const CenteredBox = styled.div`
  text-align: center;
`;

const Alert = styled.div`
  margin-top: 24px;
  padding: 16px;
  color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  border: 1px solid ${(props) => (props.type === 'error' ? 'red' : 'green')};
  border-radius: 4px;
`;

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-change-form").reset();
        setError({ status: true, msg: "Password Changed Successful", type: "success" });
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" })
    }
  };

  return (
    <Container>
      <Title>Change Password</Title>
      <Form onSubmit={handleSubmit} id="password-change-form">
        <Input type="password" name="password" placeholder="New Password" required />
        <Input type="password" name="password_confirmation" placeholder="Confirm New Password" required />
        <CenteredBox>
          <SubmitButton type="submit">Update</SubmitButton>
        </CenteredBox>
        {error.status && <Alert type={error.type}>{error.msg}</Alert>}
      </Form>
    </Container>
  );
};

export default ChangePassword;
