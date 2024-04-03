//Components
import { Container, ConfirmContainer, ConfirmHeader, Info, CodeInput, ConfirmButton, ErrorMessage, ResendLink} from "./EmailConfirmation.styles";
import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../Components/UserContext/UserContext";

const EmailConfirmation = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [confirmationError, setConfirmationError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { userEmail } = useUser();

    const handleConfirmation = async () => {
        try {
            setIsLoading(true);
            await Auth.confirmSignUp(userEmail, verificationCode);
            setIsLoading(false);
            // Provide feedback to the user upon successful confirmation
            navigate('/login');

        } catch (error) {
            setIsLoading(false);
            setConfirmationError(error.message);
        }
    };

    const handleResendCode = async () => {
        try {
            setIsLoading(true);
            // Use the appropriate method to resend the confirmation code
            await Auth.resendSignUp(userEmail);
            setIsLoading(false);
            // Provide feedback to the user upon successful code resend
            // You might want to show a success message or update the UI accordingly
        } catch (error) {
            setIsLoading(false);
            setConfirmationError(error.message);
        }
    };

    return (
        <Container>
            <ConfirmContainer>
                <ConfirmHeader>Enter Verification Code</ConfirmHeader>
                <Info>Please enter the 6-digit code sent to {userEmail}</Info>

                <CodeInput
                    type="text"
                    placeholder="Verification Code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                />
                <ConfirmButton onClick={handleConfirmation} disabled={isLoading}>
                    {isLoading ? 'Confirming...' : 'Confirm'}
                </ConfirmButton>
                {confirmationError && <ErrorMessage>{confirmationError}</ErrorMessage>}
                <ResendLink onClick={handleResendCode}>Resend code</ResendLink>
            </ConfirmContainer>
        </Container>
    );
};

export default EmailConfirmation;