import img1 from '../assets/CC_360x.jpg';
import img2 from '../assets/JC_360x.jpg';
import img3 from '../assets/AR_360x.jpg';
import img4 from '../assets/MR_360x.jpg';
import img5 from '../assets/JR_360x.jpg';

interface TrainersList {
  img: string;
  name: string;
}

export const trainersList: TrainersList[] = [
  { img: img3, name: 'CAMILA NUTRITIONIST' },
  { img: img1, name: 'ANNA PILATES INSTRUCTOR' },
  { img: img2, name: 'JEREMY OUTDOOR TRAINING INSTRUCTOR' },
  { img: img4, name: 'COACH JOHN STRENGTH & CONDITIONING' },
  { img: img5, name: 'LEV CEO & FOUNDER' },
];