export interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    height: string;
    weight: string;
    goal: string;
    daysPerWeek: number;
    gender: string;
    lastExerciseRegularly: string;
    hasDisease: boolean;
    diseases: string;
    cardName: string;
    cardNumber: string;
    cardExpiration: string;
    cardCVV: string;
  }
  
  export interface FormErrors {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    height: string;
    weight: string;
    goal: string;
    daysPerWeek: string;
    gender: string;
    lastExerciseRegularly: string;
    hasDisease: string;
    diseases: string;
    cardName: string;
    cardNumber: string;
    cardExpiration: string;
    cardCVV: string;
  }
  
  export interface StepFormProps {
    onFinish: () => void;
  }