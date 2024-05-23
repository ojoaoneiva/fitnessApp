import { mockedUsers, mockedUsersSecurity } from '../mockedData/usersData';
import { UserProfile } from '../types/TUser';

export default class Authenticator {
    static validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    static signIn = (email: string, password: string): UserProfile | undefined => {
        if (!Authenticator.validateEmail(email)) {
            throw new Error('Invalid email');
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long.');
        }

        const userSecurity = mockedUsersSecurity.find(u => u.email === email && u.password === password);
        if (!userSecurity) {
            throw new Error('Incorrect email or password');
        }

        const user = mockedUsers.find(u => u.email === email);
        if (!user) {
            throw new Error('User not found');
        }

        localStorage.setItem('UserId', user.id);
        return user;
    };
}