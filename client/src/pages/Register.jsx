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
    ${'' /* background-size: cover;
  background-position: center; */}
  display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div `
    padding: 20px;
    width: 40%;
    background-color:white;
    ${mobile({width: "80%" })}

`

const Form = styled.form `
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h1 `
    font-size:24px;
    font-weight:300;

`

const Input = styled.input `
    flex:1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding:10px;
`

const Agreement = styled.span `
    font-size: 12px;
    margin:20px 0px;
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


const Register = () => {
  return (
    <Container>
      <Wrapper>
          <Title>Create an Account</Title>
          <Form>
              <Input placeholder="name"/>
              <Input placeholder="name"/>
              <Input placeholder="name"/>
              <Input placeholder="name"/>
              <Input placeholder="name"/>
              <Input placeholder="name"/>
              <Agreement>
                  By creating an account By creating an account By creating an account By creating an account By creating an account
              </Agreement>
              <Button>Create</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
