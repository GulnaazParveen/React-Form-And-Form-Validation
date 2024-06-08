
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
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

const SendPasswordResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    };
    if (actualData.email) {
      console.log(actualData);
      document.getElementById('password-reset-email-form').reset();
      setError({ status: true, msg: "Password Reset Email Sent. Check Your Email !!", type: 'success' });
    } else {
      setError({ status: true, msg: "Please Provide Valid Email", type: 'error' });
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Reset Password</Title>
        <Form id='password-reset-email-form' onSubmit={handleSubmit}>
          <Input type='email' id='email' name='email' placeholder='Email Address' required />
          <CenteredBox>
            <SubmitButton type='submit'>Send</SubmitButton>
          </CenteredBox>
          {error.status && <Alert type={error.type}>{error.msg}</Alert>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SendPasswordResetEmail;
