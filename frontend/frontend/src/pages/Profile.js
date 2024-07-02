import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getProfile } from "../api/auth";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const data = await getProfile();
                setUser(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        getUserProfile();
    }, []);

    if (!user) {
        return (
            <Container>
                <h1>No data found</h1>
            </Container>
        );
    }

    return (
        <Container>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </Container>
    );
};

export default Profile;
