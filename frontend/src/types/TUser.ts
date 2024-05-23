export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: USER_ROLES;
    bio: string;
    profilePhoto: string;
    createdAt: string;
    height: string;
    weight: string;
    goal: string;
    daysPerWeek: number;
    gender: string;
    lastExerciseRegularly: string;
    hasDisease: boolean;
    diseases?: string;
}

export interface UserSecurity {
    id: string;
    email: string;
    password: string;
    cardName: string;
    cardNumber: string;
    cardExpiration: string;
    cardCVV: string;
}

export interface UserBusinessModel {
    id: string;
    name: string;
    email: string;
    role: USER_ROLES;
    bio: string;
    profilePhoto: string;
    createdAt: string;
}