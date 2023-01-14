import styled from 'styled-components'
import React from "react"
import { mobile } from '../responsive';

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background-color:"red";
    background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
  display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div `
    padding: 20px;
    width: 25%;
    background-color:white;
    ${mobile({width: "80%" })}

`

const Form = styled.form `
    display: flex;
    flex-direction: column;
`

const Title = styled.h1 `
    font-size:24px;
    font-weight:300;

`

const Input = styled.input `
    flex:1;
    min-width:40%;
    margin: 10px 0px;
    padding:10px;
`

const Link= styled.a `
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button `
    width:20%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
    ${mobile({width: "100%" })}

`

const Login = () => {
  return (
    <Container>
      <Wrapper>
          <Title>Sign IN</Title>
          <Form>
              <Input placeholder="username"/>
              <Input placeholder="password"/>
              <Button>LOGIN</Button>
              <Link>Do  you not rember the password</Link>
              <Link>Create an accpiunt</Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
