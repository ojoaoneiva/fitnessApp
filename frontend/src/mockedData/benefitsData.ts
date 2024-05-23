import bsvg from '../assets/health.svg';
import asvg from '../assets/performance.svg';
import csvg from '../assets/sideeffects.svg';

interface Benefits {
  icon: string;
  title: string;
  text: string;
  buttonTittle: string;
}

export const benefits: Benefits[] = [
  {
    icon: bsvg,
    title: 'STRENGTH AND MUSCLE BUILDING',
    text: 'Build strength and muscle mass with specialized training plans designed to target different muscle groups and enhance your physical performance. Our workouts are crafted to help you reach your strength goals and sculpt your body effectively.',
    buttonTittle: 'STRENGTH'
  },
  {
    icon: asvg,
    title: 'HEALTH-FOCUSED WORKOUTS',
    text: 'Access a variety of workouts and training programs tailored to improve your overall health, including cardio, flexibility, and endurance exercises. Achieve a healthier lifestyle and boost your well-being with our guided fitness routines.',
    buttonTittle: 'HEALTH'
  },
  {
    icon: csvg,
    title: 'WELLNESS AND MINDFULNESS PRACTICES',
    text: 'Explore mindfulness exercises, yoga sessions, and relaxation techniques to promote mental well-being, reduce stress, and enhance your overall quality of life. Embrace a holistic approach to wellness with our range of mindfulness practices and stress-relief activities.',
    buttonTittle: 'WELLNESS'
  },
];