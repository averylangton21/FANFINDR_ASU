import React from 'react'
import { ContactContainer, IconContainer, InfoContainer, InfoHeader, InfoHeaderContainer, InfoP, IconBox, IconStyle, IconSubContainer, IconHeader, IconText, IconTextContainer, FormContainer, FormSquare, FormInput, FormMessageInput, FormSubmitBtn } from './Contact.Styles';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <InfoContainer>
        <InfoHeaderContainer>
          <InfoHeader>Get In Touch With Us</InfoHeader>
          <InfoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Neque vitae tempus quam pellentesque nec. Eget aliquet nibh praesent tristique.</InfoP>
        </InfoHeaderContainer>
        <IconContainer>
          <IconSubContainer>
            <IconBox>
              <IconStyle><BiIcons.BiHomeAlt /></IconStyle>
            </IconBox>
            <IconTextContainer>
              <IconHeader>Office Address</IconHeader>
              <IconText>Old Fourth Ward, Atlanta, Georgia</IconText>
              <IconText></IconText>
            </IconTextContainer>
          </IconSubContainer>
          <IconSubContainer>
            <IconBox>
              <IconStyle><BsIcons.BsTelephone /></IconStyle>
            </IconBox>
            <IconTextContainer>
              <IconHeader>Phone Number</IconHeader>
              <IconText>Text: 1-404-507-2492</IconText>
              <IconText>Call: 1-864-715-2291</IconText>
            </IconTextContainer>
          </IconSubContainer>
          <IconSubContainer>
            <IconBox>
              <IconStyle><HiIcons.HiOutlineMail /></IconStyle>
            </IconBox>
            <IconTextContainer>
              <IconHeader>Email Address</IconHeader>
              <IconText>Fan: 22fan@fanfindr.com</IconText>
              <IconText>Fan: 22owner@fanfindr.com</IconText>
            </IconTextContainer>
          </IconSubContainer>
        </IconContainer>
      </InfoContainer>
      <FormContainer>
        <FormSquare>
          <FormInput placeholder='Your Name'></FormInput>
          <FormInput placeholder='Your Email'></FormInput>
          <FormInput placeholder='Your Phone'></FormInput>
          <FormMessageInput placeholder='Your Message'></FormMessageInput>
          <FormSubmitBtn>Send Message</FormSubmitBtn>
        </FormSquare>
      </FormContainer>
    </ContactContainer>
  )
}

export default Contact;