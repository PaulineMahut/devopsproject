const API_URL = 'http://localhost:5000/api/users';

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Invalid email or password');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

export const registerUser = async (name, email, password) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            throw new Error('An error occurred while registering');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

export const getProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching the profile');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

export const logoutUser = (navigate) => {
    localStorage.removeItem('token');
    navigate('/')
}
