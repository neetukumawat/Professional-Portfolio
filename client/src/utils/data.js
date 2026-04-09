// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Neetu Kumawat',
  role: 'MERN Stack Developer',
  summary:
    'I am a passionate Full Stack MERN Developer with strong experience in building scalable web applications, REST APIs, and modern UI using React and Redux Toolkit.',
  location: 'Jaipur, Rajasthan',
  email: 'kumawatneetu1201@gmail.com',
  github: 'https://github.com/neetukumawat',
  linkedin: 'https://www.linkedin.com/in/neetu-kumawat/',
  cvFile: '/Neetu-Pradeep-MERN-CV.pdf',
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚡',
    color: '#00D4FF',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Redux Toolkit', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 88 },
    ],
  },
  {
    category: 'Backend',
    icon: '🛠',
    color: '#7B2FFF',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Authentication (JWT)', level: 80 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🔧',
    color: '#00FF9C',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Deployment (Vercel/Render)', level: 88 },
      { name: 'Responsive Design', level: 92 },
    ],
  },
];

export const techBadges = [
  'React.js', 'Redux Toolkit', 'Node.js', 'Express.js',
  'MongoDB', 'Tailwind CSS', 'JavaScript', 'Git',
  'REST APIs', 'HTML5', 'CSS3', 'Mongoose',
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'City-wise weather dashboard showing current conditions and 5-day forecast with beautiful UI.',
    tags: ['React', 'API', 'CSS'],
    emoji: '🌤',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accent: '#00D4FF',
    sourceCode: 'https://github.com/neetukumawat/WeatherApp',
    liveDemo: 'https://neetukumawat.github.io/WeatherApp/',
    featured: true,
  },
  {
    id: 'Animated-Loginpage',
    title: 'Animated-Loginpage',
    description: 'A modern animated login interface with smooth transitions, interactive UI elements, and responsive design for an engaging user experience.',
    tags: ['HTML','JavaScript','CSS'],
    emoji: '✨',
    gradient: 'from-cyan-500/20 to-purple-500/20',
    accent: '#A855F7',
    sourceCode: 'https://github.com/neetukumawat/Animated-Loginpage',
    liveDemo: 'https://neetukumawat.github.io/Animated-Loginpage/',
    featured: true,
  },
  {
    id: 'github-user-finder',
    title: 'GitHub User Finder',
    description: 'Search GitHub users, view profiles and repos with a clean, responsive UI using the GitHub API.',
    tags: ['React', 'GitHub API'],
    emoji: '🐙',
    gradient: 'from-purple-500/20 to-pink-500/20',
    accent: '#7B2FFF',
    sourceCode: 'https://github.com/neetukumawat/GitHubUser_Finder',
    liveDemo: 'https://neetukumawat.github.io/GitHubUser_Finder/',
    featured: true,
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'Responsive calculator with keyboard support, expression history, and polished UI design.',
    tags: ['React', 'CSS', 'JavaScript'],
    emoji: '🧮',
    gradient: 'from-green-500/20 to-teal-500/20',
    accent: '#00FF9C',
    sourceCode: 'https://github.com/neetukumawat/CalculatorJs',
    liveDemo: 'https://neetukumawat.github.io/CalculatorJs/',
    featured: false,
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock · Paper · Scissors',
    description: 'Play vs computer with smooth animations, win/lose/draw detection, and persistent score tracking.',
    tags: ['React', 'JavaScript', 'Game'],
    emoji: '✂️',
    gradient: 'from-orange-500/20 to-red-500/20',
    accent: '#FF6B6B',
    sourceCode: 'https://github.com/neetukumawat/rockPaperScissor',
    liveDemo: 'https://neetukumawat.github.io/rockPaperScissor/',
    featured: false,
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Classic logic game with win detection, draw handling, and one-click reset built in JavaScript.',
    tags: ['JavaScript', 'Game'],
    emoji: '⭕',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    accent: '#FFB347',
    sourceCode: 'https://github.com/neetukumawat/tic-tac-toe-game',
    liveDemo: 'https://neetukumawat.github.io/tic-tac-toe-game/',
    featured: false,
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    description: 'Task manager that lets users add, edit, complete, and delete tasks — clean daily productivity tool.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    emoji: '✅',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    accent: '#818CF8',
    sourceCode: 'https://github.com/neetukumawat/Todo',
    liveDemo: 'https://neetukumawat.github.io/Todo/',
    featured: false,
  },
  {
    id: 'analog-clock',
    title: 'Analog Clock',
    description: 'Displays real-time with smoothly animated hour, minute, and second hands using pure CSS + JS.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    emoji: '🕐',
    gradient: 'from-slate-500/20 to-gray-500/20',
    accent: '#94A3B8',
    sourceCode: 'https://github.com/neetukumawat/AnalogClock',
    liveDemo: 'https://neetukumawat.github.io/AnalogClock/',
    featured: false,
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind CSS — responsive, animated, and production-ready.',
    tags: ['React', 'Tailwind'],
    emoji: '🚀',
    gradient: 'from-cyan-500/20 to-purple-500/20',
    accent: '#00D4FF',
    sourceCode: 'https://github.com/neetukumawat',
    liveDemo: '#',
    featured: true,
  },
];

export const allFilters = ['All', 'React', 'JavaScript', 'CSS', 'API', 'Game'];

// ─── Nav Links ─────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
