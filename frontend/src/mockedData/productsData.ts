interface Module {
  title: string;
  subtitle: string;
  image: string;
  id: string;
  link: string;
  description: string;
}

export const modules: Module[] = [
  {
    title: 'Group Training',
    subtitle: 'Train Together, Achieve Together',
    image: '../assets/1.jpg',
    id: 'group-training',
    link: '/group-training',
    description: 'Join our dynamic group training sessions and experience the power of teamwork in achieving your fitness goals. Our certified trainers lead high-energy workouts designed to push your limits and foster camaraderie among participants. From strength training to cardio circuits, our group sessions offer a variety of exercises suitable for all fitness levels. Get ready to sweat, support each other, and celebrate progress together!',
  },
  {
    title: 'Stretching',
    subtitle: 'Flexibility and Relaxation',
    image: '../assets/2.jpg',
    id: 'stretching',
    link: '/stretching',
    description: 'Discover the benefits of incorporating stretching into your fitness routine with our dedicated stretching module. Whether you’re a beginner or an experienced athlete, our guided stretching sessions focus on improving flexibility, reducing muscle tension, and promoting relaxation. Learn proper stretching techniques and unlock greater range of motion to enhance your overall performance and prevent injuries. Rejuvenate your body and mind as you unwind and stretch it out with us!',
  },
  {
    title: 'Circuit Training',
    subtitle: 'Efficient Total-Body Workouts',
    image: '../assets/6.jpg',
    id: 'circuit-training',
    link: '/circuit-training',
    description: 'Maximize your workout efficiency with our circuit training module, where you’ll move through a series of high-intensity exercises in quick succession. Our circuit workouts combine strength training, cardiovascular exercises, and plyometrics to deliver a comprehensive full-body workout in a short amount of time. With varying stations and timed intervals, you’ll challenge your muscles, boost your metabolism, and elevate your endurance. Experience the ultimate fat-burning and muscle-building regimen with our circuit training sessions!',
  },
  {
    title: 'Cardio Blast',
    subtitle: 'Elevate Your Heart Rate',
    image: '../assets/7.jpg',
    id: 'cardio-blast',
    link: '/cardio-blast',
    description: 'Get your heart pumping and your sweat dripping with our cardio blast module designed to torch calories and improve cardiovascular health. Led by our energetic instructors, our cardio sessions feature a mix of high-energy movements, including running, jumping, and dance-inspired routines. Whether you prefer HIIT workouts, indoor cycling, or dance cardio, we offer a variety of cardio options to keep your workouts exciting and effective. Say goodbye to boredom and hello to heart-pounding fun!',
  },
  {
    title: 'Gym Essentials',
    subtitle: 'Master the Basics, Excel in the Gym',
    image: '../assets/8.jpg',
    id: 'gym-essentials',
    link: '/gym-essentials',
    description: 'Navigate the gym with confidence and competence with our gym essentials module, designed to equip you with fundamental exercise knowledge and skills. Learn proper form and technique for essential strength-training exercises like squats, deadlifts, and bench presses. Understand gym etiquette, equipment usage, and safety guidelines to create a safe and effective workout environment. Whether you’re new to the gym or looking to refine your skills, our gym essentials module provides the foundation for a successful fitness journey.',
  },
  {
    title: 'Nutrition Fundamentals',
    subtitle: 'Fuel Your Body, Optimize Your Performance',
    image: '../assets/9.jpg',
    id: 'nutrition-fundamentals',
    link: '/nutrition-fundamentals',
    description: 'Unlock the power of nutrition and take your fitness journey to the next level with our nutrition fundamentals module. Explore the principles of healthy eating, macronutrient balance, and meal planning tailored to support your fitness goals. Discover the role of hydration, vitamins, and supplements in optimizing performance and recovery. Whether you aim to lose weight, gain muscle, or enhance athletic performance, our nutrition fundamentals module provides the knowledge and tools to fuel your body for success.',
  },
];