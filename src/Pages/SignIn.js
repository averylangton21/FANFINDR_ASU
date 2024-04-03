import React from 'react'
import { useState } from 'react';
import { Container, SignInLink, SignUpBtn, SignUpContainer, SignUpHeader, SignUpInput, ErrorMessage } from './SignIn.Styles';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const SignIn = () => {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await Auth.signIn(formData.email, formData.password); // Sign in with Amplify Auth
      // Redirect or handle successful sign-in here
      navigate('/dashboard'); // Redirect to the dashboard, change the route as needed
    } catch (error) {
      console.error('Error signing in:', error);
      setError(error.message);
      // Handle sign-in error (display error message, etc.)
    } finally{
      setLoading(false);
    }
  };

  return (
          <form onSubmit={handleFormSubmit}>
            <Container>
              <SignUpContainer>
                <SignUpHeader>
                  Sign In
                </SignUpHeader>
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

                {/* Error Message */}
                  {error && (
                    <ErrorMessage>
                      {error}
                    </ErrorMessage>
                  )}

                <SignUpBtn type="submit">
                  {loading ? 'Signing In...' : 'Sign In'}
                </SignUpBtn>

                <SignInLink to='/register'>
                  Dont have an account? Sign up here.
                </SignInLink>
              </SignUpContainer>
            </Container>
          </form>
  );
};

export default SignIn;