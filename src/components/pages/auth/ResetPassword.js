import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const ResetPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    };
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('password-reset-form').reset();
        setError({ status: true, msg: "Password Reset Successfully. Redirecting to Login Page...", type: 'success' });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' });
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Reset Password</Title>
        <Form id='password-reset-form' onSubmit={handleSubmit}>
          <Input type='password' id='password' name='password' placeholder='New Password' required />
          <Input type='password' id='password_confirmation' name='password_confirmation' placeholder='Confirm New Password' required />
          <CenteredBox>
            <SubmitButton type='submit'>Save</SubmitButton>
          </CenteredBox>
          {error.status && <Alert type={error.type}>{error.msg}</Alert>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
