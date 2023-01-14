import styled from 'styled-components'
import {Instagram, Facebook, Pinterest, Twitter, Room, Phone} from "@mui/icons-material"
import { mobile } from '../responsive';

const Container = styled.div `
    display: flex;
    ${mobile({flexDirection:"column" })}
`
const Left = styled.div `
   flex:1;
   display: flex;
   flex-direction: column;
   padding: 25px;
`
const Logo =styled.h1 ``
const Description =styled.p `
    margin: 20px 0px;
`
const SocialContainer =styled.div `
    display: flex;
`
const SocialIcon =styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color:${props => props.color }
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div `
   flex:1;
   padding: 20px;
   ${mobile({display:"none" })}
`
const Title= styled.h3 `
 margin-bottom: 30px;
`
const List= styled.ul `
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem= styled.li `
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div `
   flex:1;
   padding: 20px;
`
const ContactItem =styled.div `
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHRAD </Logo>
        <Description> hi this is a demo page</Description>
        <SocialContainer>
            <SocialIcon color="blue">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="red">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="red">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="red">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem> Home </ListItem>
                <ListItem> Home </ListItem>
                <ListItem> Home </ListItem>
                <ListItem> Home </ListItem>
                <ListItem> Home </ListItem>
                <ListItem> Home </ListItem>
                <ListItem> Home </ListItem>
                <ListItem> Home </ListItem>
            </List>
        </Center>
        <Right> 
            <Title>
                Contact
            </Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>622 Dixie path
            </ContactItem>
            <ContactItem>
                <Phone  style={{marginRight: "10px"}}/>xyz@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
