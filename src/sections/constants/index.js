export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
    {
      id: 5,
      name: 'Experience',
      href: '#experience',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Chozen',
      position: 'My Late Dog',
      img: 'assets/client1.jpg',
      review:
        "PokePiece is an exceptional developer with a knack for bringing ideas to life. He built a feature-rich web application for our team, exceeding all expectations. His creativity and technical expertise are truly impressive. I wouldn’t hesitate to work with him again!",
    },
    {
      id: 2,
      name: 'Breeze',
      position: 'Founder of TechGear PawShop',
      img: 'assets/client2.jpg',
      review:
        "PokePiece is a coding wizard! He delivered a clean, well-optimized solution for our project while maintaining clear communication throughout. His ability to solve complex problems quickly and efficiently sets him apart. Highly recommended for any programming needs!",
    },
    {
      id: 3,
      name: 'Bambi',
      position: 'My Cute Cat',
      img: 'assets/client3.jpeg',
      review:
        "Collaborating with PokePiece was an absolute pleasure. He has a unique ability to simplify complex workflows and implement them seamlessly. The final product was polished, responsive, and exceeded our expectations. His dedication to excellence is truly inspiring.",
    },
    {
      id: 4,
      name: 'Cloud',
      position: 'CEO of Bright Retriever Enterprises',
      img: 'assets/client4.jpg',
      review:
        "PokePiece turned our vision into reality with his incredible coding skills. He brought innovative ideas to the table and executed them flawlessly. His professionalism, technical prowess, and attention to detail made the entire process smooth and enjoyable. A top-tier developer!",
    },
  ];

  export const myProjects = [
    {
      title: 'Prompt Pomp - AI Prompt Sharing Platform',
      desc: 'Prompt Pomp is an innovative platform where users can share and discover AI prompts in a collaborative, public pool. Designed to encourage creativity and resourcefulness, it empowers users to edit, refine, and contribute prompts, fostering a vibrant community of AI enthusiasts.',
      subdesc:
        'Built as a cutting-edge application with Next.js 14, Tailwind CSS, and MongoDB Atlas, Prompt Pomp is optimized for seamless user experience and scalability. It ensures that every shared prompt is easily accessible and shareable, making it the go-to resource for inspiration and AI-driven solutions.',
      href: 'https://poke-promptpomp.vercel.app/',
      texture: '/textures/project/myproject1.mp4',
      logo: '/assets/prompt.svg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Piano Dedication App - Piano Blog',
      desc: "Discover the timeless beauty of the piano with this interactive platform, offering users a deep dive into the instrument's history, mechanics, and iconic compositions. From Beethoven to Chopin, explore curated content that brings classical music to life, complete with the ability to play and experience famous works right on the site.",
      subdesc:
        'Built with Vite and styled using Tailwind CSS, this piano website delivers a sleek, responsive, and engaging user experience. Designed for music enthusiasts and curious learners alike, it seamlessly combines educational resources with interactive elements to inspire a love for the piano and its rich heritage.',
      href: 'https://piano-dedication-app.vercel.app/',
      texture: '/textures/project/myproject2.mp4',
      logo: '/assets/piano-logo.svg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    
    {
      title: 'Apple iPhone Hub - Clone of Apple.com',
      desc: "This iPhone page clone is a meticulously crafted replica of Apple's iconic product showcase. It combines sleek design, smooth animations, and intuitive layouts to provide an authentic user experience, mirroring the elegance and functionality of the original.",
      subdesc:
        "Developed with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion, this clone is built for optimal performance and responsiveness. Every detail, from dynamic transitions to polished typography, ensures a seamless and visually stunning experience on any device.",
      href: 'https://apple-app-poke.vercel.app/',
      
      texture: '/textures/project/myproject3.mp4',
      logo: '/assets/apple.svg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.02 : isMobile ? 0.02 : 0.065,
      deskPosition: isMobile ? [0.0, -0.45, 0] : [0.25, -0.45, 0],
      cubePosition: isSmall ? [3, -5, 0] : isMobile ? [3, -5, 0] : isTablet ? [3, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'PokePiece',
      pos: 'Junior Developer',
      duration: '2024 - Present',
      title: "Full stack developer. Proponent of Next.js. Specializing in 3D development and animations for modern web creation.",
      icon: '/assets/github.svg',
      animation: 'victory',
    },
    
  ];