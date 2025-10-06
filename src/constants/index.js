// Import project images using correct relative paths.
// This file is located at src/constants/index.js, so assets are in ../assets/*
import portfolio from "../assets/portfolio.jpg";
import IoT from "../assets/IoT.jpg";
import secure from "../assets/api.jpeg";
import malware from "../assets/Malware.jpg";
import Security from "../assets/PasswordSecurity.jpeg";
import studymate from "../assets/studymate.jpeg";
  
export const contact = {
    contact : "7903689873",
    email: "29rajkumarsingh@gmail.com",
    };

export const PROJECTS = [
    {
        title:"Portfolio",
        image:portfolio,
        description:"A personal portfolio website",
        skills:["HTML","Tailwindcss","React","Nodejs"],
        domains:["Web"],
        githubLink: "https://github.com/RajKumarSingh065/Portfolio1",
        liveLink: "https://therajkumarsingh.netlify.app"
    },
    {
        title:"Secure API Gateway",
        // Placeholder image until a dedicated asset is added
        image:secure,
        description:"A secure API gateway that provides authentication and authorization for APIs.",
        skills:["Python","Bash","Docker","Kong Gateway","JWT"],
        domains:["Security","Backend"],
        githubLink: "https://github.com/RajKumarSingh065/secure-api-gateway", 
    },
    {
        title:"Polymorphic Malware Simulator",
        // Placeholder image until a dedicated asset is added
        image:malware,
        description:"A tool that simulates polymorphic malware, allowing users to test and analyze the behavior of such malware.",
        skills:["Rust","Bash","YAML","Docker"],
        domains:["Security","Research"],
        githubLink: "https://github.com/RajKumarSingh065/polymorphic-malware", 
    },
    {
        title:"CU StudyMate",
        // Placeholder image until a dedicated asset is added
        image:studymate,
        description:"A platform for students to access notes",
        skills:["Kotlin","XML","Firebase","Android Studio"],
        domains:["Mobile"],
        githubLink: "https://github.com/RajKumarSingh065/CU-StudyMate", 
    },
    {
        title:"IoT Device Security Analyzer",
        image:IoT,
        description:"A tool that analyzes and secures Internet of Things (IoT) devices within a network, identifying vulnerabilities and providing recommendations for improving security.",
        skills:["Python","Django","Machine Learning"],
        domains:["Security"],
        githubLink: "https://github.com/RajKumarSingh065/iot-security-analyzer",
    },
    {
        title:"Password Strength Assessment",
        image:Security,
        description:"A tool that assesses the strength of passwords, providing recommendations for improving security.",
        skills:["Python","Flask","HTML","Tailwindcss","React"],
        domains:["Security","Web"],
        githubLink: "https://github.com/RajKumarSingh065/Password-Score",
    }
];

// Social usernames/config used by SocialProof and Contact sections
// Social usernames/config used by SocialProof
export const SOCIAL = {
    github: "RajKumarSingh065",
    leetcode: "rajkumar_01",
    hackerrank: "29rajkumarsingh",
    tryhackme: "Dark.Knight065",
};


