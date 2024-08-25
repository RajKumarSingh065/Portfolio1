import React from 'react';
import weather from "../assets/weather.jpg"
import portfolio from "../assets/portfolio.jpg"
import IoT from "../assets/IoT.jpg"
import Security from "../assets/PasswordSecurity.jpeg"
  
  export const contact = {
    contact : "7903689873",
    email: "29rajkumarsingh",
    };

export const PROJECTS = [
    {
        title:"Portfolio",
        image:portfolio,
        description:"A personal portfolio website",
        skills:["HTML","Tailwindcss","React","Nodejs"]
    },
    {
        title:"CU StudyMate",
        image:portfolio,
        description:"A platform for students to access notes",
        skills:["Kotlin","XML"]
    },{
        title:"IoT Device Security Analyzer",
        image:IoT,
        description:"A tool that analyzes and secures Internet of Things (IoT) devices within a network, identifying vulnerabilities and providing recommendations for improving security.",
        skills:["Python","Django","Machine Learning"]
    },
    {
        title:"Password Strength Assessment",
        image:Security,
        description:"A tool that assesses the strength of passwords, providing recommendations for improving security.",
        skills:["Python","Flask","HTML","Tailwindcss","React"]
    },
    {
        title:"Weather App",
        image:weather,
        description:"A weather app",
        skills:["HTML","Tailwindcss","React","Nodejs"]
    },
    
];


