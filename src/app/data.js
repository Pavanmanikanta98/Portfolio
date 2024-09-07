// this comtains the data we are gonna for AboutMe component and slider component

export const AboutData = [
  {
    count: 1,
    title: "UI / UX Designer",
    img: "/web-design.svg",
    array: [
      "Information Architecture",
      "Pen and Paper",
      "Adobe Photoshop",
      "Sketch",
      "Figma",
      " ... ",
      " Software",
      
      "Typography / Spacing / ...",
    ],
  },
  {
    count: 2,
    title: "Front-end Developer",
    img: "/frontend.svg",
    array: [

      "HTML / CSS3",
      "javaScript (ES6)",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Recoil / Redux",
      "TypeScript",
      "REST API",
    ],
  },
  {
    count: 3,
    title: "Back-end Developer",
    img: "/backend.svg",
    array: [
      "NodeJS / Express.js",
      "Postgres / MySQL ",
      "Next.js (API)",
      "GOLANG",
      "...",
      "ASP (Once upon a time)",
      "MongoDB"
    ],
  },
  {
    count: 4,
    title: "DevOps and Admin",
    img: "/eternity.svg",
    array: [
      "Docker / CI CD",
      "Apache / Nginx",
      "CentOS / Ubuntu",
      "Windows Server / IIS",
      "Mail Servers / DNS Servers",
      "Firewalls / Security",
      "VMWare ESXi",
    ],
  },
  {
    count: 5,
    title: "Machine Learning",
    img: "/machine-learning.svg",
    array: [
      "Fine Tuning",
      "Contentful",
      "GraphCMS",
     "...",
     "...",
      "Sanity",
      "SiteBaan (My Own)",
    ],
  },
  {
    count: 6,
    title: "Tools and Things",
    img: "/settings.svg",
    array: [
      "VSCode",
      "Git / Github",
      "Bash / Powershell",
      "NPM / Yarn",
      "Plesk Control Panel",
      "Vercel / Stormkit / Netlify",
      "Postman / Insomnia",
    ],
  },
];

// this is for the slider
export const DataArray = [
  {
    title: "DevNexus: A Collaborative Social Platform for Knowledge Sharing",
    name: "DevNexus",
    des: "I built DevNexus to enable developers to connect, share knowledge, and collaborate on projects. Users can create profiles showcasing their expertise, engage in discussions on trending topics, and share articles and tutorials. The platform fosters a vibrant community by facilitating team-based project collaboration, allowing developers to form teams and work together on open-source contributions, New idea initiatives, or personal endeavors.",
    des1: "DevNexus is built using a modern and robust tech stack that ensures high performance, scalability, and a seamless user experience. The key components of the tech stack include React for building the user interface, Node.js for server-side development, Express.js for API creation, and MongoDB for flexible data storage. By leveraging these technologies, DeveloperConnect delivers a high-quality, interactive experience for users while ensuring the platform is scalable and maintainable as the community grows",
    images: ["/01.png", "/02.png", "/03.png", "/04.png", "/05.png"],
    id:"511"
  },
  {
    title: "Digital Wallet Application: Facilitating Secure Transactions",
    name: "Digital Wallet Application: Facilitating Secure Transactions",

    des: "I built the Digital Wallet Application to provide users with a seamless platform for secure transactions via mobile numbers or bank transfers. The application allows users to easily manage their finances, make payments, and transfer funds while ensuring a high level of security. With an intuitive user interface engineered using Next.js and efficient state management through Recoil, users can navigate the app effortlessly.",

    des1: " The application utilizes secure authentication for the initial login via phone number, with a PIN required to confirm transactions. I architected dual backends using Node.js and Express.js to handle secure transactions and frontend interactions, implementing stringent security protocols for scalability and reliability. By championing ACID principles, the application guarantees data integrity and reliable processing of concurrent transactions. This robust architecture ensures smooth interactions within the application. Tech Stack Note: We have no access to real-world banks, so I created a few fake endpoints for demonstration purposes. The application's performance and scalability may vary depending on the actual implementation with real banking systems. ",
    //need to add images
    images: ["/nextjs.png"],
    id:"512"
  },
  {
    title: "TextEvo: Advanced Text Summarization Application",
    name: "TextEvo: Advanced Text Summarization Application",
    des: "I developed TextEvo to create an advanced text summarization application leveraging natural language processing. This application allows users to input lengthy texts and receive concise summaries, making it easier to grasp essential information quickly.",
    des1: "TextEvo utilizes the Hugging Face API to deliver accurate and efficient text summarization. The frontend is built with HTML, CSS, and JavaScript, providing a user-friendly interface for data input and summary display. This small project is designed to be simple yet effective, ensuring users can easily navigate and utilize the summarization features.",
//need to add images
    images: ["/docker.png", ""],
    id:"513"
  },
  {
    title: "Real Estate and Property Management Project",
    name: "Inans Property Management ",
    des: "We built this project for inans group LTD",
    des1: "Aside from its gorgeous design, this website is backed by an outstanding plugin that allows owners and agencies to simply display different properties in the neighbourhood and create an online showcase in an appealing manner for home buyers and tenants..",

    images: ["/mongodb.png"],
    id:"514"
  },
  {
    title: "Cloning Medium: A Blogging Platform for the Modern Web",
    name: "Cloning Medium: A Blogging Platform for the Modern Web",
    des: "I have developed a clone of the popular online publishing platform Medium, allowing users to create accounts, publish their own stories and articles, and engage with content through features like clapping. The platform aims to provide a seamless and distraction-free experience for both writers and readers, fostering a community of individuals passionate about sharing and discovering high-quality content.",
    des1: "To bring my Medium clone to life, I utilized a tech stack that includes React for the frontend, Recoil for state management, Hono.js for the backend, and Cloudflare Workers for deployment. This combination allows for a scalable and performant application capable of handling numerous users and content. Cloudflare Workers ensure efficient content delivery through their global CDN, providing low latency and high availability for users worldwide. This setup enables the development of a feature-rich blogging platform that closely resembles the original Medium while enhancing the user experience.",
 
    //need to add images
    images: ["redux.png", "", ""],
    id:"515"
  },
];
