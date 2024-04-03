//Components
import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Auth, Storage } from 'aws-amplify';

//Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopBar = ({ title }) => {

    const [profilePictureUrl, setProfilePictureUrl] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // Fetch the user's profile picture URL from AWS Cognito
        async function fetchProfilePicture() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                const profilePicture = user.attributes['custom:profile_picture']; // Use the correct attribute name
                const fullProfilePictureKey = `public/${profilePicture}`;
                setProfilePictureUrl(fullProfilePictureKey);

                //debbugging
                console.log('Profile Picture URL:', profilePicture);
                const fullImageUrl = await Storage.get(profilePicture);
                setImageUrl(fullImageUrl);
                console.log('Image URL (from Storage.get):', fullImageUrl);

            } catch (error) {
                console.error('Error fetching profile picture:', error);
            }
        }

        fetchProfilePicture();
    }, []);

    return (
        <Box display="flex" justifyContent="space-between">
            {/* Page Header */}
            <Box>
                <Typography color="#fd7f0f" fontSize="30px" fontFamily="'Mulish', sans-serif" fontWeight="bold" paddingLeft='30px'>
                    {title}
                </Typography>
            </Box>

            {/* Profile Picture*/}
            <Box display="flex" alignItems="center">
                {profilePictureUrl && (
                    <img
                        src={imageUrl}
                        alt=""
                        style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                )}
                <Typography ml="10px" color="white" fontFamily="'Mulish', sans-serif"></Typography>
                <KeyboardArrowDownIcon color="white" />
            </Box>
        </Box>
    );
}

export default TopBar;