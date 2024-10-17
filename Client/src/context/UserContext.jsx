import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDatabase, setUserDatabase] = useState([]);
    const [error, setError] = useState(''); // Added error state

    const logIn = (userData) => {
        const foundUser = userDatabase.find(
            (user) => user.email === userData.email && user.password === userData.password
        );

        if (foundUser) {
            setUser(foundUser);
            setError('');
        } else {
            setError('Invalid email or password!');
        }
    };

    const signUp = (userData) => {
        setUserDatabase((prevUsers) => [...prevUsers, userData]);
        setUser(userData);
        setError(''); // Clear any previous error
    };

    const logout = () => {
        setUser(null);
        setError('');
    };

    const isAuthenticated = !!user;

    return (
        <UserContext.Provider value={{ user, logIn, signUp, logout, isAuthenticated, error }}>
            {children}
        </UserContext.Provider>
    );
};
