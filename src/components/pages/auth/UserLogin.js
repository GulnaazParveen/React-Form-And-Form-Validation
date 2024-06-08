import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById('login-form').reset();
      setError({ status: true, msg: "Login Success", type: 'success' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' });
    }
  };

  return (
    <>
      <Form id='login-form' onSubmit={handleSubmit}>
        <Input type='email' name='email' placeholder='Email Address'  />
        <Input type='password' name='password' placeholder='Password'  />
        <CenteredBox>
          <SubmitButton type='submit'>Login</SubmitButton>
        </CenteredBox>
        <NavLink to='/sendpasswordresetemail'>Forgot Password?</NavLink>
        {error.status && <Alert type={error.type}>{error.msg}</Alert>}
      </Form>
    </>
  );
};

export default UserLogin;
