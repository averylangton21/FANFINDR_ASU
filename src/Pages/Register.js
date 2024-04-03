//Components
import React from 'react';
import { Container, SignInLink, SignUpBtn, SignUpContainer, SignUpHeader, SignUpInput, Form, ErrorMessage  } from './Register.Style';
import { useState, } from 'react';
import { Auth } from "aws-amplify";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Components/UserContext/UserContext';
import { Storage } from 'aws-amplify';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB (adjust as needed)

const Register = () => {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { setUserEmail } = useUser();
  const [loading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profilePicture: null, // Add a new field for profile picture
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setError('File size exceeds the limit.');
      } else if (!file.type.startsWith('image/')) {
        setError('Invalid file type. Please choose an image.');
      } else {
        setFormData({
          ...formData,
          profilePicture: file,
        });
        setError(null); // Clear any previous error messages
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setIsLoading(true);

      if (formData.profilePicture) {
        // Upload the profile picture to a storage service (e.g., Amazon S3)
        const profilePictureKey = `profile-pictures/${formData.email}/${formData.profilePicture.name}`;
        await Storage.put(profilePictureKey, formData.profilePicture);
  
        // Add the reference to the profile picture in the user's attributes
        formData.profilePicture = profilePictureKey;
      }
  
      const userAttributes = {
        email: formData.email,
        given_name: formData.firstName,
        family_name: formData.lastName,
        'custom:profile_picture': formData.profilePicture, // Add profilePicture to userAttributes
      };
  
      // Sign up the user with the updated attributes
      await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: userAttributes,
      });
  
      // Set the user's email in the context
      setUserEmail(formData.email);
  
      console.log('User created with profile picture');
      navigate('/emailconfirmation');

    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <SignUpContainer>
      <Form onSubmit={handleSubmit} >
        <SignUpHeader>
          Sign Up
        </SignUpHeader>

        <SignUpInput 
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <SignUpInput 
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        />

        <SignUpInput 
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        />

        <SignUpInput 
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        />

        {/* Add input for profile picture */}
        <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
          />

        {/* Error Message */}
        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}

        <SignUpBtn type="submit">
          {loading ? 'Creating Account...' : 'Sign Up'}
        </SignUpBtn>

        </Form>
        <SignInLink to='/login'>
          Already have an account? Login here.
        </SignInLink>
      </SignUpContainer>
    </Container>
  );
}

export default Register;