import { UserProfile, UserSecurity, USER_ROLES } from '../types/TUser';

export const mockedUsers: UserProfile[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: USER_ROLES.NORMAL,
        bio: 'Lorem ipsum dolor sit amet.',
        profilePhoto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '2024-05-22',
        height: '175',
        weight: '70',
        goal: 'Stay Fit',
        daysPerWeek: 3,
        gender: 'Male',
        lastExerciseRegularly: '6 months ago',
        hasDisease: false,
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: USER_ROLES.ADMIN,
        bio: 'Consectetur adipiscing elit.',
        profilePhoto: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createdAt: '2024-05-23',
        height: '165',
        weight: '60',
        goal: 'Lose Weight',
        daysPerWeek: 5,
        gender: 'Female',
        lastExerciseRegularly: 'Never',
        hasDisease: true,
        diseases: 'Hypertension',
    },
];

export const mockedUsersSecurity: UserSecurity[] = [
    {
        id: '1',
        email: 'john@example.com',
        password: 'password123',
        cardName: 'John Doe',
        cardNumber: '1234567890123456',
        cardExpiration: '05/28',
        cardCVV: '123'
    },
    {
        id: '2',
        email: 'jane@example.com',
        password: 'password456',
        cardName: 'Jane Smith',
        cardNumber: '9876543210987654',
        cardExpiration: '10/25',
        cardCVV: '456'
    },
];
