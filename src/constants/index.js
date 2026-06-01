const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 22, 2026",
    title: "Building SugarWatch: Integrating Barcode Scanning and Nutrition Tracking via Open Food Facts API",
    image: "/images/blog1.png", // Keep or update your asset paths
    link: "https://github.com/visheshsriv23/SugarWatch"
  },
  {
    id: 2,
    date: "May 18, 2026",
    title: "Behind Mocktail Matrix: Crafting Fluid UI Experiences and Interactive Dynamic Forms",
    image: "/images/blog2.png",
    link: "https://github.com/visheshsriv23/Mocktail-Matrix"
  },
  {
    id: 3,
    date: "Apr 07, 2026",
    title: "Demystifying EasyRest: Architecting Scalable RESTful API Structures for Modern Web Frameworks",
    image: "/images/blog3.png",
    link: "https://github.com/visheshsriv23/EasyRest"
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js,", "Next.js,", "HTML,", "CSS"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS,", "GSAP,", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js,", "Express,", "NestJS,", "JavaScript,", "Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB,", "PostgreSQL,", "MySQL,"],
  },
  {
    category: "Dev Tools",
    items: ["Git,", "GitHub,", "Docker,","Kubernetes,", "Pipelines"],
  },
  {
    category: "Data Science",
    items: ["Python,", "Matplotlib,", "Seaborn,", "Pandas,"],
  },
  {
    category: "M.L.",
    items: ["KNN,", "Random Forest,", "Reinforced Learning"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/visheshsriv23",
  },
  {
    id: 2,
    text: "Mail",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=kingvishesh27@gmail.com",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/vishesh-srivastava-29572233a/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [

    {
  id: 6,
  name: "SugarWatch",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-10 left-44", // Spaced out from Nike (left-5)
  windowPosition: "top-[20vh] left-7",
  children: [
    {
      id: 1,
      name: "SugarWatch Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "SugarWatch is an intelligent nutritional tracking platform engineered to help users monitor sugar intake and make healthier dietary choices.",
        "Featuring an integrated barcode scanner powered by the Open Food Facts API, it pulls instant ingredient and nutritional data directly from product packages.",
        "Instead of manual logging, it gives users real-time breakdowns, clear metrics, and dynamic warnings about hidden sugars.",
        "It's built using the MERN stack (MongoDB, Express.js, React, Node.js) with a beautifully responsive Tailwind CSS frontend."
      ]
    },
    {
      id: 2,
      name: "sugarwatch.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://sugarwatch.onrender.com/auth/signup",
      position: "top-10 right-20"
    },
    {
      id: 4,
      name: "sugarwatch.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-40",
      image: "/images/blog1.png"
    }
  ]
},

    {
      id: 7,
      name: "Mojito Site",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Mojito Site Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Mojito Site is a highly creative and visually stunning web experience built to showcase premium beverage aesthetics.",
            "Instead of static landing pages, it brings the user interface to life using interactive 3D elements and smooth, physics-based transitions.",
            "Think of it as a virtual lounge where fluid animations, responsive layouts, and rich textures make the digital experience feel entirely tangible.",
            "Leveraging modern web tools, it combines cutting-edge frontend animations with responsive structure for a top-tier premium look."
          ]
        },
        {
          id: 2,
          name: "mojito-site.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mocktail-matrix.vercel.app/",
          position: "top-10 right-20"
        },
        {
          id: 4,
          name: "mojito-site.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          image: "/images/blog2.png"
        }
      ]
    },

    {
  id: 8,
  name: "Easy Rest",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-52 left-44", // Cleanly drops it below SugarWatch, next to nothing
  windowPosition: "top-[45vh] left-5",
  children: [
    {
      id: 1,
      name: "Easy Rest Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
                "Easy Rest is a comprehensive full-stack vacation rental and room booking platform designed to simplify travel accommodations.",
                "It features an intuitive user interface for exploring properties, managing active room listings, and calculating dynamically tracked pricing with integrated GST/taxes.",
                "Engineered with a responsive architectural framework, it delivers optimized search metrics, fast UI responsiveness, and secure data management.",
                "Designed with smooth micro-interactions to provide an elegant, hassle-free booking environment for hosts and guests alike."
            ]
    },
    {
      id: 2,
      name: "easy-rest.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: " https://easyrest-8d3t.onrender.com/listings",
      position: "top-10 right-20"
    },
    {
      id: 4,
      name: "easy-rest.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-20", 
      image: "/images/blog3.png"
    }
  ]
}
  ]
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/vishesh.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/vishesh-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/vishesh-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
       "Hey! I'm Vishesh 👋, a full-stack developer who loves bridging the gap between high-performance logic and beautiful, micro-interactive user experiences.",
        "I specialize in the MERN stack, Next.js, and creating fluid, immersive interfaces using tools like GSAP and Three.js. If it involves complex state management, custom 3D web graphics, or a Docker container that refuses to cooperate at 2 AM, I'm probably working on it.",
        "I'm big on meticulous UI design, bulletproof UX architecture, and writing clean, scalable code that doesn't require an archeological dig to debug.",
        "Outside of development, you can find me analyzing predictive ML models, organizing local football tournaments, over-engineering interactive birthday websites for my favorite people, and sipping overpriced coffee while trying to justify my latest tech gadget purchase 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };