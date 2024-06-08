import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 48rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height:38px;
  margin: 4px 0 8px 0;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const Label = styled.label`
  margin: 10px 0 3px 0;
`;

const Select = styled.select`
  margin: 8px 0;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const Option = styled.option``;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const Checkbox = styled.input`
  margin-right: 8px;
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

const Registration = () => {
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
      name: data.get('name'),
      lastName: data.get('LastName'),
      username: data.get('Username'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      phoneNo: data.get('number'),
      country: data.get('country'),
      city: data.get('city'),
      panNo: data.get('panNo'),
      aadharNo: data.get('AadharNo'),
      tc: data.get('tc'),
    };

    if (actualData.name && actualData.lastName && actualData.username && actualData.email && actualData.password && actualData.password_confirmation && actualData.phoneNo && actualData.country && actualData.city && actualData.panNo && actualData.aadharNo && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('registration-form').reset();
        setError({ status: true, msg: "Registration Successful", type: 'success' });
        navigate('/dashboard');
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' });
      }
    } else {
      setError({ status: true, msg: "All Fields are required ", type: 'error' });
    }
  };

  return (
    <>
      <Form id='registration-form' onSubmit={handleSubmit}>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name'  />
        <Label htmlFor='LastName'>Last Name</Label>
        <Input type='text' id='LastName' name='LastName'  />
        <Label htmlFor='Username'>Username</Label>
        <Input type='text' id='Username' name='Username'  />
        <Label htmlFor='email'>Email Address</Label>
        <Input type='email' id='email' name='email'  />
        <Label htmlFor='password'>Password</Label>
        <Input type='password' id='password' name='password'  />
        <Label htmlFor='password_confirmation'>Confirm Password</Label>
        <Input type='password' id='password_confirmation' name='password_confirmation'  />
        <Label htmlFor='PhoneNo'>Phone No</Label>
        <Input type='number' id='PhoneNo' name='number'  />
        <Label htmlFor='country'>Country</Label>
        <Select name="country" id="country" >
          <Option value="Bangladesh">Bangladesh</Option>
          <Option value="Afghanistan">Afghanistan</Option>
          <Option value="Canada">Canada</Option>
          <Option value="USA">USA</Option>
        </Select>
        <Label htmlFor='city'>City</Label>
        <Select name="city" id="city" >
          <Option value="Mumbai">Mumbai</Option>
          <Option value="Delhi">Delhi</Option>
          <Option value="Kolkata">Kolkata</Option>
          <Option value="Hyderabad">Hyderabad</Option>
        </Select>
        <Label htmlFor='panNo'>Pan No</Label>
        <Input type="number" id='panNo' name='panNo'  />
        <Label htmlFor='AadharNo'>Aadhar No</Label>
        <Input type="number" id='AadharNo' name='AadharNo'  />
        <CheckboxContainer>
          <Checkbox type='checkbox' id='tc' name='tc' value='agree'  />
          <Label htmlFor='tc'>I agree to the terms and conditions.</Label>
        </CheckboxContainer>
        <CenteredBox>
          <SubmitButton type='submit'>Join</SubmitButton>
        </CenteredBox>
        {error.status && <Alert type={error.type}>{error.msg}</Alert>}
      </Form>
    </>
  );
};

export default Registration;
