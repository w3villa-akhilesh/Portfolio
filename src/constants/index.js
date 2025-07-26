import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitImage2,
    htmlcsslogo,
    javascriptlogo,
    reactlogo,
    nodelogo,
    mongodblogo,
    pythonlogo,
    sqllogo,
    javalogo,
    project1,
    project2,
    project3,
    project4,
    instagram,
    telegram,
    twitter,
    linkedin,
    github,
    gmail,
  } from "../assets";

  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#about",
    },
    {
      id: "1",
      title: "Services",
      url: "#services",
    },
    {
      id: "2",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "4",
      title: "Resume",
      onlyMobile: true,
    },
  ];
    
  export const projects = [
    {
      id: "0",
      title: "Trackify",
      text: "Trackify is a task and time management web application built using the MERN stack. It allows users to create tasks, track daily progress, set deadlines, and analyze productivity trends through intuitive dashboards and reports.",
      date: "June 2024",
      status: "done",
      imageUrl: project1,
      url: "",
    },
    {
      id: "1",
      title: "SnapClear",
      text: "SnapClear is an AI-powered image editing tool that lets users remove objects, blur backgrounds, and enhance image quality. It integrates external APIs for image processing and offers a smooth, drag-and-drop interface.",
      date: "September 2024",
      status: "done",
      imageUrl: project2,
      url: "",
    },
    {
      id: "2",
      title: "ChatPilot",
      text: "ChatPilot is an AI chatbot platform designed for customer support and internal team assistance. Built using React and Node.js, it leverages large language models to provide real-time, context-aware responses.",
      date: "March 2024",
      status: "done",
      imageUrl: project3,
      url: "",
    },
    {
      id: "3",
      title: "Foodio",
      text: "Foodio is a food delivery application that connects local restaurants with customers. It offers real-time order tracking, user ratings, secure checkout, and restaurant management tools. Currently being built using the MERN stack.",
      date: "November 2024",
      status: "progress",
      imageUrl: project4,
      url: "",
    },
  ];
  
  
  export const collabText =
    "Currently, I am eagerly exploring new opportunities where I can contribute my skills and collaborate with like-minded professionals. I am excited about leveraging my expertise in MERN stack development and DSA to make meaningful contributions to innovative projects.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Learn About Me",
      text: "Hi there! I'm Akhilesh Gupta, a passionate aspiring Software engineer with a keen interest in software engineering, particularly in MERN stack development and Data Structures & Algorithms (DSA). ",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "HTML/CSS",
      icon: htmlcsslogo,
      width: 36,
      height: 38,
    },
    {
      id: "1",
      title: "Javascript",
      icon: javascriptlogo,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "React",
      icon: reactlogo,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "NodeJs",
      icon: nodelogo,
      width: 38,
      height: 38,
    },
    {
      id: "4",
      title: "MongoDB",
      icon: mongodblogo,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "SQL",
      icon: sqllogo,
      width: 36,
      height: 36,
    },
    {
      id: "6",
      title: "Python",
      icon: pythonlogo,
      width: 34,
      height: 36,
    },
    {
      id: "7",
      title: "Java",
      icon: javalogo,
      width: 28,
      height: 32,
    },
  ];
  
  export const services = [
    {
      id: "0",
      title: "Technical Writing",
      text: "Clear, concise content tailored to your audience's needs. Enhance communication with expert documentation.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Web Development",
      text: "Customized websites built with precision, functionality, and user experience in mind. Elevate your online presence.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Community Building",
      text: "Foster connections and engagement through strategic initiatives and inclusive platforms. Cultivate thriving online communities.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "LinkedIn",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/in/akhilesh-gupta-3b1093222",
    },
    {
      id: "1",
      title: "GitHub",
      iconUrl: github,
      url: "https://github.com/Akhilesh1105",
    },
    {
      id: "2",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://twitter.com",
    },
    {
      id: "3",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com",
    },
    {
      id: "4",
      title: "Gmail",
      iconUrl: gmail,
      url: "mailto:akhileshgupta2404@gmail.com",
    },
    {
      id: "5",
      title: "Telegram",
      iconUrl: telegram,
      url: "https://telegram.org",
    },
  ];